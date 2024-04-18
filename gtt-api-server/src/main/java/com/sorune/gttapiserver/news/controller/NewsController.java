package com.sorune.gttapiserver.news.controller;

import com.sorune.gttapiserver.news.DTO.NewsDTO;
import com.sorune.gttapiserver.news.DTO.PageRequestDTO;
import com.sorune.gttapiserver.news.DTO.PageResponseDTO;
import com.sorune.gttapiserver.news.service.NewsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/news")
@RequiredArgsConstructor
@Log4j2
public class NewsController {
    private final NewsService newsService;

    @GetMapping("/list")
    public PageResponseDTO<NewsDTO> list(PageRequestDTO pageRequestDTO) {
       log.info(pageRequestDTO);
        return newsService.getList(pageRequestDTO);
    }

}
