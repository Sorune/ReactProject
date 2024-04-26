package com.sorune.gttapiserver.notice.entity;

import com.sorune.gttapiserver.news.entity.News;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class NoticeImg {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long imgNo;

        private String uuid;

        private String imgName;

        private String path;

    }


