package com.sorune.gttapiserver.member.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sorune.gttapiserver.member.entity.Member;
import com.sorune.gttapiserver.member.entity.MemberRole;
import lombok.*;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Getter
@Setter
@ToString
public class MemberDTO extends User implements OAuth2User{

    private Long num;           // 회원번호 nn
    private String password;          // 회원 비밀번호 nn
    private String nick;     
    private String userId;          // 회원 아이디 nn
    private String zoneCode;    // 회원 주소(우편번호) nn
    private String address;     // 회원 주소(검색주소) nn
    private String addrSub;     // 회원 주소(나머지 동/호/수 등)
    private String email;
    private String phone;
    private boolean enabled;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDate birth;    // 회원 생년월일 nn
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDateTime joinDate;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDateTime editDate;

    private Set<MemberRole> roles;

    private Map<String, Object> props; //소셜 로그인 정보
    public MemberDTO(String userId, String pw, String nick, boolean isEnabled, Set<MemberRole> authorities) {
        super(userId,pw,authorities.stream().map(str -> new SimpleGrantedAuthority("ROLE_" + str)).collect(Collectors.toList()));
    }
    public MemberDTO(boolean isEnabled, String nick, String userId, String zoneCode, String address, String addrSub, String email, String phone, LocalDate birth, String password, Set<MemberRole> authorities) {
        super(userId, password, authorities.stream().map(role -> new SimpleGrantedAuthority("ROLE_" + role.name())).collect(Collectors.toList()));
        this.enabled = isEnabled;
        this.nick = nick;
        this.userId = userId;
        this.zoneCode = zoneCode;
        this.address = address;
        this.addrSub = addrSub;
        this.email = email;
        this.phone = phone;
        this.birth = birth;
        this.password = password;
        this.roles = authorities; // authorities를 roles로 설정
    }

    @Override
    public Map<String, Object> getAttributes() {
        return this.getProps();
    }

    @Override
    public String getName() {
        return this.getNick();
    }

    @Override
    public String getUsername(){
        return this.getUserId();
    }

    @Override
    public String getPassword() { return this.password;}


    public Map<String, Object> getClaims() {
        Map<String, Object> dataMap = new HashMap<>();

        dataMap.put("num", this.getNum());
        dataMap.put("pw", this.getPassword());
        dataMap.put("nick", this.getNick());
        dataMap.put("userId", this.getUserId());
        dataMap.put("zoneCode", this.getZoneCode());
        dataMap.put("address", this.getAddress());
        dataMap.put("addrSub", this.getAddrSub());
        dataMap.put("email", this.getEmail());
        dataMap.put("phone", this.getPhone());
        dataMap.put("enabled", this.isEnabled());
        dataMap.put("birth", this.getBirth());
        dataMap.put("joinDate", this.getJoinDate());
        dataMap.put("editDate", this.getEditDate());
        dataMap.put("props", this.getProps());
        return dataMap;
    }

    public Member toEntity(MemberDTO memberDTO) {
        return Member.builder()
                .num(memberDTO.getNum())
                .password(memberDTO.getPassword())
                .nick(memberDTO.getNick())
                .userId(memberDTO.getUserId())
                .email(memberDTO.getEmail())
                .phone(memberDTO.getPhone())
                .birth(memberDTO.getBirth())
                .zoneCode(memberDTO.getZoneCode())
                .address(memberDTO.getAddress())
                .addrSub(memberDTO.getAddrSub())
                .enabled(memberDTO.isEnabled())
                .roles(memberDTO.getRoles())
                .build();
    }


    public MemberDTO toDTO(Member member) {
        return new MemberDTO(
                member.isEnabled(),
                member.getNick(),
                member.getUserId(),
                member.getZoneCode(),
                member.getAddress(),
                member.getAddrSub(),
                member.getEmail(),
                member.getPhone(),
                member.getBirth(),
                member.getPassword(),
                member.getRoles()
        );
    }
}
