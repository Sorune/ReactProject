package com.sorune.gttapiserver.news.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NewsDTO {

    private Long newsNo;
    private String title;
    private String content;
    private String writer;
    private String theTeam;
    private Long hits;
    private Long recomNo;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone= "Asia/Seoul")
    private LocalDateTime regDate;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone= "Asia/Seoul")
    private LocalDateTime modDate;



}
