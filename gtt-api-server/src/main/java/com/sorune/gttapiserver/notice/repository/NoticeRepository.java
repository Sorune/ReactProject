package com.sorune.gttapiserver.notice.repository;

import com.sorune.gttapiserver.notice.entity.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeRepository extends JpaRepository<Notice, Long> {
}
