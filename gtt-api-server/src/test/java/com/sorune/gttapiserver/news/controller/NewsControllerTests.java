package com.sorune.gttapiserver.news.controller;

import com.sorune.gttapiserver.news.DTO.NewsDTO;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@RequiredArgsConstructor
public class NewsControllerTests {


    @Autowired
    private final NewsController controller;


    @Test
    public void testGetNews(){
        NewsDTO newsDTO = controller.getNews(100l);

        System.out.println(newsDTO.getNews_No() + newsDTO.getTitle() +  newsDTO.getContent() + newsDTO.getHits() + newsDTO.getReg_Date());
    }
}