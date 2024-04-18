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

}
