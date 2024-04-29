package com.sorune.gttapiserver.member.service;

import com.sorune.gttapiserver.common.DTO.PageRequestDTO;
import com.sorune.gttapiserver.common.DTO.PageResponseDTO;
import com.sorune.gttapiserver.member.DTO.MemberDTO;

public interface MemberService {

    // 회원 가입
    Long joinMember(MemberDTO memberDTO);
    // 회원 수정
    Long editMember(MemberDTO memberDTO);
    // 회원 탈퇴
    void cencelMember(Long num);
    // 회원 한명 조회
    MemberDTO searchMember(Long num);
    // 회원 전체 조회
    PageResponseDTO<MemberDTO> memberList(PageRequestDTO pageRequestDTO);
    // 회원 가입시 중복 id 체크
    boolean checkId(String id);
    // 회원 로그인시 id 일치여부 체크
    boolean isLogin(String id, String pw);
}
