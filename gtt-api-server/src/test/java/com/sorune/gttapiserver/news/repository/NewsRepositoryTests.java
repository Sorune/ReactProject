package com.sorune.gttapiserver.news.repository;

import com.sorune.gttapiserver.news.entity.News;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;
import java.util.stream.IntStream;

@SpringBootTest
public class NewsRepositoryTests {

    @Autowired
    private NewsRepository newsRepository;

    @Test
    public void insertTest() {
        IntStream.rangeClosed(1, 100).forEach(i -> {
            News news = News.builder()
                    .title("기사 제목 ... " + i).content("기사 내용 ... " + i).writer("작성자 ... " + i).theTeam("T1")
                    .build();

            newsRepository.save(news);
        });
    }

    @Test
    public void getTest(){
        Optional<News> result = newsRepository.findById(1L);

        News news = result.get();

        System.out.println(news);
    }
}
