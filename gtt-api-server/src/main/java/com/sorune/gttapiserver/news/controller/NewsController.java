package com.sorune.gttapiserver.news.controller;

import com.sorune.gttapiserver.common.util.CustomFileUtil;
import com.sorune.gttapiserver.news.DTO.NewsDTO;
import com.sorune.gttapiserver.news.DTO.PageRequestDTO;
import com.sorune.gttapiserver.news.DTO.PageResponseDTO;
import com.sorune.gttapiserver.news.service.NewsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.ResourceBundle;

@RestController
@RequestMapping("/api/news")
@RequiredArgsConstructor
@Log4j2
public class NewsController {
    private final NewsService newsService;
    private final CustomFileUtil fileUtil;

    @GetMapping("/list")
    public PageResponseDTO<NewsDTO> list(PageRequestDTO pageRequestDTO) {
       log.info(pageRequestDTO);
        return newsService.getList(pageRequestDTO);
    }

    @GetMapping("/{newsno}")
    public NewsDTO getNews(@PathVariable("newsno") Long newsNo) { // 한 개의 게시물을 조화
        return newsService.getById(newsNo);
    }


    @PostMapping("/")
    public Map<String, Long> register(@RequestBody NewsDTO newsDTO) {
        Long newsNo = newsService.registerNews(newsDTO);

        return Map.of("newsNo", newsNo);
    }

    @PutMapping("/{newsNo}")
    public Map<String, String> modify(@PathVariable("newsNo") Long newsNo, @RequestBody NewsDTO newsDTO) {
        // 제목, 내용 중 하나의 값만 보내면 오류 발생

        newsDTO.setNewsNo(newsNo);

        newsService.modifyNews(newsDTO);

        return Map.of("result", "SUCCESS");
    }

    @DeleteMapping("/{newsNo}")
    public Map<String,  String> remove(@PathVariable("newsNo") Long newsNo) {
        newsService.removeNews(newsNo);

        return Map.of("result", "SUCCESS");
    }

    // 첨부파일 불러와지는지 확인하는 컨트롤러
    @GetMapping("/view/{fileName}")
    public ResponseEntity<Resource> viewFileGet(@PathVariable String fileName) {
        return fileUtil.getFile(fileName);
    }

}
