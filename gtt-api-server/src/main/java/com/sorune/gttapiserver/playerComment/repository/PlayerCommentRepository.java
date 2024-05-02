package com.sorune.gttapiserver.playerComment.repository;

import com.sorune.gttapiserver.playerComment.entity.PlayerComment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlayerCommentRepository extends JpaRepository<PlayerComment, Long> {

    Page<PlayerComment> findAllByPno(Pageable pageable, Long pno);
}
