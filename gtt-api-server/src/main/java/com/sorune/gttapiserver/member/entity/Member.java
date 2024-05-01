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
    private String pw;       // 맴버 비번 nn

    @Column(nullable = false)
    private String nick;     // 맴버 별명 nn

    @Column(nullable = false)
    private String userId;       // 맴버 아이디 nn

    @Column(nullable = false)
    private String email;       // 맴버 이메일 nn

    @Column(nullable = false)
    private String phone;       // 맴버 휴대폰 nn

    @Column(nullable = false)
    private LocalDate birth;    // 맴버 생일 nn

    @Column(nullable = false)
    private String zoneCode;   // 맴버 우편 nn

    @Column(nullable = false)
    private String address;     // 맴버 주소 nn

    @Column(nullable = false)
    private String addrSub;     // 맴버 나머지 주소 nn

    // 회원 닉네임 수정용
    public void editMemNick(String nick) {
        this.nick = nick;
    }

    // 회원 아이디 수정용
    public void editMemId(String userId) {this.userId = userId;}

    // 회원 휴대폰 수정용
    public void editPhone(String phone) {this.phone = phone;}

    // 회원 이메일 수정용
    public void editEmail(String email) {this.email = email;}

    // 회원 비밀번호 수정용
    public void editMemPw(String pw) {
        this.pw = pw;
    }

    // 회원 생년월일 수정용
    public void editMemBirth(LocalDate birth) {
        this.birth = birth;
    }

    // 회원 우편번호 수정용
    public void editMemAddrNum(String zoneCode) {
        this.zoneCode = zoneCode;
    }

    // 회원 주소 수정용
    public void editMemAddr(String address) {
        this.address = address;
    }

    // 회원 나머지 주소 수정용
    public void editMemAddr2(String addrSub) { this.addrSub = addrSub; }
}
