package com.sorune.gttapiserver.news.controller;

import com.sorune.gttapiserver.news.DTO.NewsDTO;
import com.sorune.gttapiserver.news.DTO.PageRequestDTO;
import com.sorune.gttapiserver.news.DTO.PageResponseDTO;
import com.sorune.gttapiserver.news.service.NewsService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/news")
public class NewsController {

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
