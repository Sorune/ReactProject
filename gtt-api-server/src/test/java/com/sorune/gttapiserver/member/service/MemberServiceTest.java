package com.sorune.gttapiserver.member.service;

import com.sorune.gttapiserver.member.DTO.MemberDTO;
import com.sorune.gttapiserver.player.DTO.PlayerDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.LocalDateTime;

@SpringBootTest
@RequiredArgsConstructor
@Log4j2
public class MemberServiceTest {

    @Autowired
    private MemberService memberService;

    @Test // 한명의 회원정보 등록
    public void testMemberInsert(){
        MemberDTO memberDTO = MemberDTO.builder()
                .num(101L)
                .userId("user1")
                .pw("1234")
                .nick("user1")
                .zoneCode("1234-1")
                .address("경기도 오산시 00동")
                .birth(LocalDate.of(1990, 5, 16))
                .build();

        Long memNum = memberService.joinMember(memberDTO);
        System.out.println(memNum);
    }

    @Test // 한명의 회원정보 수정
    public void testMemberModify() {
        MemberDTO memberDTO = MemberDTO.builder()
                .num(1L)
                .userId("dddd")
                .pw("dddd")
                .zoneCode("123456")
                .address("mem12345")
                .nick("user1Nick")
                .birth(LocalDate.of(1881,9,9))
                .build();
        Long memNum = memberService.editMember(memberDTO);
        System.out.println(memNum);
    }

    @Test // 한명의 회원정보 삭제
    public void testMemberRemove() {
        Long memNo = 6L;
        memberService.cencelMember(memNo);
    }

    @Test // 한명의 회원정보 조회
    public void testMemberSearch() {
        Long memNo = 99L;
        log.info(memberService.searchMember(memNo));
    }
}
