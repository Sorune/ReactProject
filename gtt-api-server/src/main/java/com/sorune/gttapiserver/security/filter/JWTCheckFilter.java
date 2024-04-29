package com.sorune.gttapiserver.security.filter;

import com.sorune.gttapiserver.member.DTO.MemberDTO;
import com.sorune.gttapiserver.member.entity.MemberRole;
import com.sorune.gttapiserver.security.jwt.JWTUtill;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Map;
import java.util.Set;

@Log4j2
public class JWTCheckFilter extends OncePerRequestFilter {

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        if(request.getMethod().equals("OPTIONS")) { return true; }

        String path = request.getRequestURI();

        if (path.startsWith("/api/member/")) { return true;}

        return false;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authHeaderString = request.getHeader("Authorization");

        String accessToken = authHeaderString.substring(7);
        Map<String,Object> claims = JWTUtill.parseToken(accessToken);

        log.info("JWT.claims : "+claims);
        String email = (String) claims.get("email");
        String pw =(String) claims.get("pw");
        String nick = (String) claims.get("nick");
        boolean enabled = (boolean) claims.get("enabled");
        String phone = (String) claims.get("phone");
        String userId = (String) claims.get("userId");
        Set<MemberRole> roles = (Set<MemberRole>) claims.get("roles");

        MemberDTO memberDTO = new MemberDTO(userId,pw,nick,enabled,roles);
    }
}
