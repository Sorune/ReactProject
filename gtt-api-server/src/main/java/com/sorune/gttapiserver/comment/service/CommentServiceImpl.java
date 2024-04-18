package com.sorune.gttapiserver.comment.service;

import com.sorune.gttapiserver.comment.DTO.CommentDTO;
import com.sorune.gttapiserver.comment.DTO.PageRequestDTO;
import com.sorune.gttapiserver.comment.DTO.PageResponseDTO;
import com.sorune.gttapiserver.comment.entity.Comment;
import com.sorune.gttapiserver.comment.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
@Log4j2
@RequiredArgsConstructor // 생성자 자동주입
public class CommentServiceImpl implements CommentService{

    // 자동 주입 대상은 final로 선언
    private final ModelMapper modelMapper;

    private final CommentRepository commentRepository;


    @Override
    public Long register(CommentDTO commentDTO) {

        Comment comment = modelMapper.map(commentDTO, Comment.class);

        Comment saveComment = commentRepository.save(comment);

        return saveComment.getComNo();
    }

    @Override
    public CommentDTO get(Long comNo) {

        Optional<Comment> result = commentRepository.findById(comNo);

        Comment comment = result.orElseThrow();

        CommentDTO dto = modelMapper.map(comment, CommentDTO.class);

        return dto;
    }

    @Override
    public void modify(CommentDTO commentDTO) {

        Optional<Comment> result = commentRepository.findById(commentDTO.getComNo());
        Comment comment = result.orElseThrow();
        comment.changeContent(commentDTO.getContent());
        commentRepository.save(comment);
    }

    @Override
    public void remove(Long comNo) {

        commentRepository.deleteById(comNo);
    }

    @Override
    public PageResponseDTO<CommentDTO> list(PageRequestDTO pageRequestDTO) {

        Pageable pageable =
                PageRequest.of(pageRequestDTO.getPage() - 1,
                        pageRequestDTO.getSize(), Sort.by("comNo").descending()
                        );  // 1페이지가 0
        Page<Comment> result = commentRepository.findAll(pageable); // 페이징처리를 모든 객체를 찾아와 적용
        List<CommentDTO> dtoList = result.getContent().stream().map(comment -> modelMapper.map(comment, CommentDTO.class)).collect(Collectors.toList());

        long totalCount = result.getTotalElements();

        PageResponseDTO<CommentDTO> responseDTO =
                PageResponseDTO.<CommentDTO>withAll()
                        .dtoList(dtoList)
                        .pageRequestDTO(pageRequestDTO)
                        .totalCount(totalCount)
                        .build();
        return responseDTO;
    }
}
