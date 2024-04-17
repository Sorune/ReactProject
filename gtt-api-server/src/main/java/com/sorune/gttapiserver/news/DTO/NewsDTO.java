package com.sorune.gttapiserver.news.DTO;

import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class NewsDTO {

    private Long newsNo;
    private String title;
    private String content;
    private String writer;
    private String theTeam;
    private Long hits;
    private Long recomNo;
    private LocalDateTime regDate;
    private LocalDateTime modDate;

}
