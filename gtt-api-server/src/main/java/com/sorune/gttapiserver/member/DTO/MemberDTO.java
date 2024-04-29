package com.sorune.gttapiserver.member.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sorune.gttapiserver.member.entity.MemberRole;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Getter
@Setter
@ToString
public class MemberDTO extends User implements OAuth2User {

    private Long num;           // 회원번호 nn
    private String pw;          // 회원 비밀번호 nn
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

    private Map<String, Object> props; //소셜 로그인 정보
    public MemberDTO(String userId, String pw, String nick, boolean isEnabled, Set<MemberRole> authorities) {
        super(userId,pw,authorities.stream().map(str -> new SimpleGrantedAuthority("ROLE_" + str)).collect(Collectors.toList()));

    }

    @Override
    public Map<String, Object> getAttributes() {
        return this.getProps();
    }

    @Override
    public String getName() {
        return this.getUserId();
    }

    @Override
    public String getUsername(){
        return this.getUserId();
    }

    public Map<String, Object> getClaims() {
        Map<String, Object> dataMap = new HashMap<>();

        dataMap.put("num", this.getNum());
        dataMap.put("pw", this.getPw());
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
}