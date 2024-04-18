package com.sorune.gttapiserver.news.service;

import com.sorune.gttapiserver.news.DTO.NewsDTO;
import com.sorune.gttapiserver.news.DTO.PageRequestDTO;
import com.sorune.gttapiserver.news.DTO.PageResponseDTO;
import com.sorune.gttapiserver.news.entity.News;
import com.sorune.gttapiserver.news.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

@Service
@RequiredArgsConstructor
public class NewsServiceImpl implements NewsService {

    private final NewsRepository newsRepository;

    @Override
    public Long registerNews(NewsDTO newsDTO) {
        News news = dtoToEntity(newsDTO);

        newsRepository.save(news);

        return news.getNewsNo();
    }

    @Override
    public void modifyNews(NewsDTO newsDTO) {
        News news = newsRepository.getReferenceById(newsDTO.getNewsNo());

        news.changeTitle(newsDTO.getTitle());
        news.changeContent(newsDTO.getContent());

        newsRepository.save(news);
    }

    @Override
    public void removeNews(Long no) {
        newsRepository.deleteById(no);
    }

    @Override
    public NewsDTO getById(Long no) {
        NewsDTO newsDTO = newsRepository.findByNewsNo(no);

        return newsDTO;
    }

    @Override
    public PageResponseDTO<NewsDTO> getList(PageRequestDTO pageRequestDTO) {

        Sort sort = Sort.by("newsNo").descending();

        Pageable pageable = PageRequest.of(pageRequestDTO.getPage(), pageRequestDTO.getSize(), sort);

        Page<News> news = newsRepository.findAll(pageable);

        NewsDTO newsDTO = entityToDTO(news);


        return new PageResponseDTO<>(newsDTO, pageRequestDTO, newsRepository.countByNewsNo());
    }
}
