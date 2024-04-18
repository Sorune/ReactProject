package com.sorune.gttapiserver.news.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sorune.gttapiserver.upload.DTO.FileDTO;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDateTime regDate;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private LocalDateTime modDate;



    @Builder.Default
    private List<FileDTO> UploadDTOList = new ArrayList<>();        // 첨부파일 이름


}
