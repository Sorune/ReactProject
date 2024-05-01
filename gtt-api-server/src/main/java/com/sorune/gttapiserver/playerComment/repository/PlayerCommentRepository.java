package com.sorune.gttapiserver.playerComment.repository;

import com.sorune.gttapiserver.playerComment.entity.PlayerComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerCommentRepository extends JpaRepository<PlayerComment, Long> {

}
