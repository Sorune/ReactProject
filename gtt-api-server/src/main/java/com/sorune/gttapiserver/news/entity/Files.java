package com.sorune.gttapiserver.news.entity;

import jakarta.persistence.Embeddable;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Embeddable
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Files {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long fileNo;        // 파일 번호 자동생성

    private String fileName;    // 파일명

    private String fileType;    // 어떠한 엔티티와 연관이 있는지 확인하기 위함


}
