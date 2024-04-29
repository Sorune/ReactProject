package com.sorune.gttapiserver.notice.service;

import com.sorune.gttapiserver.common.DTO.PageRequestDTO;
import com.sorune.gttapiserver.common.DTO.PageResponseDTO;
import com.sorune.gttapiserver.notice.domain.NoticeDTO;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

@SpringBootTest
@Log4j2
public class NoticeServiceTests {

    @Autowired
    NoticeService noticeService;

    @Test
    public void testRegister(){

        NoticeDTO noticeDTO = NoticeDTO.builder()
                .title("서비스 테스트")
                .content("테스트 내용")
                .writer("tester")
                .build();
        Long notiNo = noticeService.register(noticeDTO);

        log.info("notiNo : " + notiNo);
    }

    @Test
    public void testRead(){
        Long notiNo = 101L;
        NoticeDTO noticeDTO=noticeService.get(notiNo);
        log.info(noticeDTO);
    }


    @Test
    public void testList(){

        PageRequestDTO pageRequestDTO =PageRequestDTO.builder().page(2).size(10).build();

        PageResponseDTO<NoticeDTO> responseDTO =noticeService.list(pageRequestDTO);

        log.info(responseDTO);

    }

}