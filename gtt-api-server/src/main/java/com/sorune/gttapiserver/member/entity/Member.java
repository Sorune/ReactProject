package com.sorune.gttapiserver.member.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
@DynamicInsert
@DynamicUpdate
public class Member extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long num;        // 맴버 번호 자동생성 nn

    @Column(nullable = false)
    private String pw;       // 맴버 비번 자동생성 nn

    @Column(nullable = false)
    private String nick;     // 맴버 별명 자동생성 nn

    @Column(nullable = false)
    private String id;       // 맴버 아이디 자동생성 nn

    @Column(nullable = false)
    private LocalDate birth;    // 맴버 생일 자동생성 nn

    @Column(nullable = false)
    private String addNum;   // 맴버 우편 자동생성 nn

    @Column(nullable = false)
    private String addr;     // 맴버 주소 자동생성 nn

    // 회원 닉네임 수정용
    public void editMemNick(String nick) {
        this.nick = nick;
    }

    // 회원 아이디 수정용
    public void editMemId(String id) {
        this.id = id;
    }

    // 회원 비밀번호 수정용
    public void editMemPw(String pw) {
        this.pw = pw;
    }

    // 회원 생년월일 수정용
    public void editMemBirth(LocalDate birth) {
        this.birth = birth;
    }

    // 회원 우편번호 수정용
    public void editMemAddrNum(String addNum) {
        this.addNum = addNum;
    }

    // 회원 주소 수정용
    public void editMemAddr(String addr) {
        this.addr = addr;
    }
}
