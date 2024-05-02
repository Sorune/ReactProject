package com.sorune.gttapiserver.comment.repository;

import com.sorune.gttapiserver.comment.entity.Comment;
import com.sorune.gttapiserver.news.DTO.NewsDTO;
import com.sorune.gttapiserver.news.entity.News;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    Page<Comment> findAllByNewsNo(Long newsNo, Pageable pageable);
    Page<Comment> findAllByNotiNo(Long notiNo, Pageable pageable);


}
