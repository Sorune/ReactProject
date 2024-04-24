package com.sorune.gttapiserver.news.repository;

import com.sorune.gttapiserver.news.entity.News;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class NewsRepositoryTests {

    @Autowired
    private NewsRepository newsRepository;

    @Test
    public void newsSelectTests(){
        News news = newsRepository.findByNewsNo(201l);

        System.out.println(news);
    }

    @Test
    public void newsInsertTests(){
        News news = News.builder().title("testTest").content("testTest").theTeam("T1").writer("Test").build();

        newsRepository.save(news);
    }
}
