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
    void cencelMember(Long memBno);
    // 회원 한명 조회
    MemberDTO searchMember(Long memBno);
    // 회원 전체 조회
    PageResponseDTO<MemberDTO> memberList(PageRequestDTO pageRequestDTO);

    boolean checkId(String id);
}
