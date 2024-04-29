package com.sorune.gttapiserver.member.repository;

import com.sorune.gttapiserver.member.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Member findByUserId(String userId);
    Member findByUserIdAndPw(String userId, String pw);
}
