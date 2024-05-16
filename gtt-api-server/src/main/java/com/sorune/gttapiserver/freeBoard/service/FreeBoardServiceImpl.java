package com.sorune.gttapiserver.freeBoard.service;

import com.sorune.gttapiserver.common.DTO.PageRequestDTO;
import com.sorune.gttapiserver.common.DTO.PageResponseDTO;
import com.sorune.gttapiserver.freeBoard.DTO.FreeBoardDTO;
import com.sorune.gttapiserver.freeBoard.entity.FreeBoard;
import com.sorune.gttapiserver.freeBoard.repository.FreeBoardRepository;
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

@Service
@RequiredArgsConstructor
@Transactional
@Log4j2
public class FreeBoardServiceImpl implements FreeBoardService {
    private final FreeBoardRepository freeBoardRepository;
    private final ModelMapper modelMapper;

    @Override
    public Long registerFreeBoard(FreeBoardDTO freeBoardDTO) {
        FreeBoard freeBoard = modelMapper.map(freeBoardDTO, FreeBoard.class);
        freeBoardRepository.save(freeBoard);
        return freeBoard.getFno();
    }

    @Override
    public void modifyFreeBoard(FreeBoardDTO freeBoardDTO) {
        FreeBoard freeBoard = freeBoardRepository.getReferenceById(freeBoardDTO.getFno());
        freeBoard.setFno(freeBoardDTO.getFno());
        freeBoard.setTitle(freeBoardDTO.getTitle());
        freeBoard.setContent(freeBoardDTO.getContent());
        freeBoardRepository.save(freeBoard);
    }

    @Override
    public void removeFreeBoard(Long no) {
        freeBoardRepository.deleteById(no);
    }

    @Override
    public FreeBoardDTO getById(Long no) {
        FreeBoard freeBoard = freeBoardRepository.getOne(no);
        return modelMapper.map(freeBoard, FreeBoardDTO.class);
    }

    @Override
    public PageResponseDTO<FreeBoardDTO> getList(PageRequestDTO pageRequestDTO) {
        Pageable pageable = PageRequest.of(pageRequestDTO.getPage()-1, pageRequestDTO.getSize(), Sort.by("fno").descending());
        Page<FreeBoard> freeBoards = freeBoardRepository.findAll(pageable);
        List<FreeBoardDTO> dtoList = freeBoards.stream().map(dto -> modelMapper.map(dto, FreeBoardDTO.class)).toList();
        dtoList.forEach(dto->log.info(dto.toString()));
        long total = freeBoards.getTotalElements();
        return PageResponseDTO.<FreeBoardDTO>withAll()
                .totalCount(total)
                .dtoList(dtoList)
                .pageRequestDTO(pageRequestDTO)
                .build();
    }

    @Override
    public PageResponseDTO<FreeBoardDTO> getMyBoard(PageRequestDTO pageRequestDTO, String userId) {
        Pageable pageable = PageRequest.of(pageRequestDTO.getPage()-1, pageRequestDTO.getSize(), Sort.by("fno").descending());
        Page<FreeBoard> freeBoards = freeBoardRepository.findAllByWriter(pageable,userId);
        List<FreeBoardDTO> dtoList = freeBoards.stream().map(dto -> modelMapper.map(dto, FreeBoardDTO.class)).toList();
        dtoList.forEach(dto->log.info(dto.toString()));
        long total = freeBoards.getTotalElements();
        return PageResponseDTO.<FreeBoardDTO>withAll()
                .totalCount(total)
                .dtoList(dtoList)
                .pageRequestDTO(pageRequestDTO)
                .build();
    }

    @Override
    public PageResponseDTO<FreeBoardDTO> hotPost(PageRequestDTO pageRequestDTO) {
        Pageable pageable = PageRequest.of(pageRequestDTO.getPage()-1, pageRequestDTO.getSize(), Sort.by("hits").descending());
        Page<FreeBoard> freeBoards = freeBoardRepository.findAll(pageable);
        List<FreeBoardDTO> dtoList = freeBoards.stream().map(dto -> modelMapper.map(dto, FreeBoardDTO.class)).toList();
        dtoList.forEach(dto->log.info(dto.toString()));
        long total = freeBoards.getTotalElements();
        return PageResponseDTO.<FreeBoardDTO>withAll()
                .totalCount(total)
                .dtoList(dtoList)
                .pageRequestDTO(pageRequestDTO)
                .build();
    }

}
