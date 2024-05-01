package com.sorune.gttapiserver.member.controller;

import com.sorune.gttapiserver.common.DTO.PageRequestDTO;
import com.sorune.gttapiserver.common.DTO.PageResponseDTO;
import com.sorune.gttapiserver.common.util.CustomFileUtil;
import com.sorune.gttapiserver.member.DTO.MemberDTO;
import com.sorune.gttapiserver.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public MemberDTO search(@PathVariable("num") Long num) {

        return memberService.searchMember(num);
    }

    // 회원 가입 ㅇ
    @PostMapping("/")
    public Map<String, Long> join(@RequestBody MemberDTO memberDTO) {

//        List<MultipartFile> files = memberDTO.getFiles();
//        List<String> uploadFileNames = fileUtil.saveFiles(files);
//        memberDTO.setFileDTOList(uploadFileNames);

        log.info("member : " + memberDTO);

        Long num = memberService.joinMember(memberDTO);

        return Map.of("memBno", num);
    }

    // 회원 수정 ㅇ
    @PutMapping("/{num}")
    public Map<String, String> edit(@PathVariable("num") Long num, @RequestBody MemberDTO memberDTO) {

        memberDTO.setNum(num);
        memberService.editMember(memberDTO);

        return Map.of("result", "SUCCESS");
    }

    // 회원 삭제
    @DeleteMapping("/{memBno}")
    public Map<String, String > remove(@PathVariable("memBno") Long num) {

        memberService.cencelMember(num);

        return Map.of("result", "SUCCESS");
    }

    // 회원 로그인
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody MemberDTO memberDTO) {
        log.info("Login attempt for ID: {}", memberDTO.getUserId());
        // Removed logging of password for security reasons

        boolean loginSuccess = memberService.isLogin(memberDTO.getUserId(), memberDTO.getPassword());

        if (loginSuccess) {
            return ResponseEntity.ok(Map.of("result", "SUCCESS", "message", "Login successful"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("result", "FAILURE", "message", "Invalid credentials"));
        }
    }


    // 아이디 검증
    @GetMapping("/checkId/{userId}")
    public Map<String,Object> checkId(@PathVariable String userId) {
        log.info("checkId : " + userId);
        return Map.of("message",memberService.checkId(userId));
    }

    // 닉네임 검증
    @GetMapping("/checkNick/{nick}")
    public Map<String,Object> checkNick(@PathVariable String nick) {
        log.info("checkNick : " + nick);
        return Map.of("message",memberService.checkNick(nick));
    }
}
