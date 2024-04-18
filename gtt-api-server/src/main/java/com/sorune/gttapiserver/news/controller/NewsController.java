package com.sorune.gttapiserver.news.controller;

import com.sorune.gttapiserver.news.DTO.NewsDTO;
import com.sorune.gttapiserver.news.DTO.PageRequestDTO;
import com.sorune.gttapiserver.news.DTO.PageResponseDTO;
import com.sorune.gttapiserver.news.service.NewsService;
<<<<<<< HEAD
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
=======
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
>>>>>>> 4cffade56b28abf4de855b4381b9dc696e9b7623
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

    private final NewsService newsService;

    @GetMapping("/{newsno}")
    public NewsDTO getNews(@PathVariable("newsno") Long newsNo) { // 한 개의 게시물을 조화
        return newsService.getById(newsNo);
    }

    @GetMapping("/list")
    public PageResponseDTO<NewsDTO> list(PageRequestDTO pageRequestDTO) {
        return newsService.getList(pageRequestDTO);
    }

    @PostMapping("/")
    public Map<String, Long> register(@RequestBody NewsDTO newsDTO) {
        Long newsNo = newsService.registerNews(newsDTO);

        return Map.of("newsNo", newsNo);
    }

    @PutMapping("/{newsNo}")
    public Map<String, String> modify(@PathVariable("newsNo") Long newsNo, @RequestBody NewsDTO newsDTO) {
        // 제목, 내용 중 하나의 값만 보내면 오류 발생

        newsDTO.setNews_No(newsNo);

        newsService.modifyNews(newsDTO);

        return Map.of("result", "SUCCESS");
    }

    @DeleteMapping("/{newsNo}")
    public Map<String,  String> remove(@PathVariable("newsNo") Long newsNo) {
        newsService.removeNews(newsNo);

        return Map.of("result", "SUCCESS");
    }

}
