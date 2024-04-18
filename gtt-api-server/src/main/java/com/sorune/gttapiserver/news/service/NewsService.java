package com.sorune.gttapiserver.news.service;

import com.sorune.gttapiserver.news.DTO.NewsDTO;
import com.sorune.gttapiserver.news.DTO.PageRequestDTO;
import com.sorune.gttapiserver.news.DTO.PageResponseDTO;
import com.sorune.gttapiserver.news.entity.News;

public interface NewsService {
    
    Long registerNews(NewsDTO newsDTO);

    void modifyNews(NewsDTO newsDTO);

    void removeNews(Long no);

    NewsDTO getById(Long no);

    PageResponseDTO<NewsDTO> getList(PageRequestDTO pageRequestDTO);



    default News dtoToEntity(NewsDTO dto){
        News news = News.builder().
                newsNo(dto.getNewsNo()).title(dto.getTitle()).content(dto.getContent()).writer(dto.getWriter()).hits(dto.getHits())
                .recomNo(dto.getRecomNo()).theTeam(dto.getTheTeam())
                .build();

        return news;
    }

    default NewsDTO entityToDTO(News news){
        NewsDTO newsDTO = NewsDTO.builder()
                .newsNo(news.getNewsNo()).title(news.getTitle()).content(news.getContent()).regDate(news.getRegDate())
                .modDate(news.getModDate()).writer(news.getWriter()).hits(news.getHits()).recomNo(news.getRecomNo()).theTeam(news.getTheTeam())
                .build();

        return newsDTO;
    }
}
