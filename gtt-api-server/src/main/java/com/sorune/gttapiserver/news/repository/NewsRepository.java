package com.sorune.gttapiserver.news.repository;

import com.sorune.gttapiserver.news.DTO.NewsDTO;
import com.sorune.gttapiserver.news.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface NewsRepository extends JpaRepository<News, Long>{

    @Query(value = "SELECT news_No, title, content, writer, reg_Date, hits FROM News  WHERE news_No=:newsNo", nativeQuery = true)
    NewsDTO findByNewsNo(@Param("newsNo") Long newsNo);

    @Query("SELECT count(news_No) FROM News WHERE news_No > 0 ")
    Long countByNewsNo();

}
