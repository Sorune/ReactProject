package com.sorune.gttapiserver.member.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberDTO {

    private Long num;           // 회원번호 nn
    private String pw;          // 회원 비밀번호 nn
    private String nick;        // 회원 닉네임
    private String email;       // 회원 이메일
    private String phone;       // 회원 전화번호
    private String userId;      // 회원 아이디 nn
    private String zoneCode;    // 회원 주소(우편번호) nn
    private String address;     // 회원 주소(검색주소) nn
    private String addrSub;     // 회원 주소(나머지 동/호/수 등)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDate birth;    // 회원 생년월일 nn

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDateTime joinDate;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDateTime editDate;

    @Builder.Default
    private List<MultipartFile> files = new ArrayList<>(); // 등록과 수정시 새로운 파일을 업로드 할 때 사용

    @Builder.Default
    private List<String> fileDTOList = new ArrayList<>(); // 업로드 완료된 파일의 이름

}