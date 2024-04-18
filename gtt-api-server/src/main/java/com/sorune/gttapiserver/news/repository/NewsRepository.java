package com.sorune.gttapiserver.news.repository;

import com.sorune.gttapiserver.news.DTO.NewsDTO;
import com.sorune.gttapiserver.news.entity.News;
import com.sorune.gttapiserver.news.repository.search.SearchBoardRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface NewsRepository extends JpaRepository<News, Long>, SearchBoardRepository {

    @Query("SELECT n FROM News n WHERE n.newsNo=:newsNo")
    NewsDTO findByNewsNo(@Param("newsNo") Long newsNo);

    Long countByNewsNo(Long newsNo);



//    @Query("SELECT b, w FROM Board b LEFT JOIN b.writer w WHERE b.bno=:bno")
//    Object getBoardWithWriter(@Param("bno") Long bno);
//
//    @Query("SELECT b, r FROM Board b LEFT JOIN Reply r ON r.board = b WHERE b.bno = :bno")
//    List<Object[]> getBoardWithReply(@Param("bno") Long bno);
//
//    @Query(value = "SELECT b, w, COUNT(r)" +
//            " FROM Board b " +
//            " LEFT JOIN b.writer w " +
//            " LEFT JOIN Reply r ON r.board = b " +
//            " GROUP BY b",
//            countQuery = "SELECT COUNT(b) FROM Board b")
//    Page<Object[]> getBoardWithReplyCount(Pageable pageable);
//
//    @Query("SELECT b, w, COUNT(r) FROM Board b LEFT JOIN b.writer w " +
//            " LEFT OUTER JOIN Reply r ON r.board = b WHERE b.bno = :bno")
//    Object getBoardByBno(@Param("bno") Long bno);
}
