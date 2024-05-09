package com.sorune.gttapiserver.playerComment.repository;

import com.sorune.gttapiserver.playerComment.entity.PlayerComment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface PlayerCommentRepository extends JpaRepository<PlayerComment, Long> {

//    Page<PlayerComment> findAllByPnoOrderByPlayerComNo(Pageable pageable, Long pno);

    // 한 선수에 대한 전체 댓글 리스트
    List<PlayerComment> findAllByPnoOrderByPlayerComNo(Long pno);

    @Query("SELECT AVG(pc.recomNo) FROM PlayerComment pc WHERE pc.pno = :pno")
    Double meanOfRecomNoByPno(@PathVariable("pno") Long pno);
}
