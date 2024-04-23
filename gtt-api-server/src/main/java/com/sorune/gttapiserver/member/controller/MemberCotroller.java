package com.sorune.gttapiserver.member.controller;

import com.sorune.gttapiserver.common.DTO.PageRequestDTO;
import com.sorune.gttapiserver.common.DTO.PageResponseDTO;
import com.sorune.gttapiserver.common.util.CustomFileUtil;
import com.sorune.gttapiserver.member.DTO.MemberDTO;
import com.sorune.gttapiserver.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
@Log4j2
public class MemberCotroller {

    private final MemberService memberService;

    private final CustomFileUtil fileUtil;

    // 회원 전체 리스트
    @GetMapping("/list")
    public PageResponseDTO<MemberDTO> list(PageRequestDTO pageRequestDTO) {
        log.info(pageRequestDTO);
        return memberService.memberList(pageRequestDTO);
    }

    // 한명의 회원 조회 ㅇ
    @GetMapping("/{num}")
    public MemberDTO search(@PathVariable("num") Long memBno) {

        return memberService.searchMember(memBno);
    }

    // 회원 가입 ㅇ
    @PostMapping("/")
    public Map<String, Long> join(@RequestBody MemberDTO memberDTO) {

//        List<MultipartFile> files = memberDTO.getFiles();
//        List<String> uploadFileNames = fileUtil.saveFiles(files);
//        memberDTO.setFileDTOList(uploadFileNames);

        log.info("member : " + memberDTO);

        Long memBno = memberService.joinMember(memberDTO);

        return Map.of("memBno", memBno);
    }

    // 회원 수정 ㅇ
    @PutMapping("/{num}")
    public Map<String, String> edit(@PathVariable("num") Long memBno, @RequestBody MemberDTO memberDTO) {

        memberDTO.setNum(memBno);
        memberService.editMember(memberDTO);

        return Map.of("result", "SUCCESS");
    }

    // 회원 삭제
    @DeleteMapping("/{memBno}")
    public Map<String, String > remove(@PathVariable("memBno") Long memBno) {

        memberService.cencelMember(memBno);

        return Map.of("result", "SUCCESS");
    }
}
