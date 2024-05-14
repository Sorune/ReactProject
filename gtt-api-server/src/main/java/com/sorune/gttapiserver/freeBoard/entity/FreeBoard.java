package com.sorune.gttapiserver.freeBoard.entity;

import com.sorune.gttapiserver.common.entity.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class FreeBoard extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long fno;
    private String title;
    private String content;
    private String writer;

    @ColumnDefault("0")
    private Long hits;
    @ColumnDefault("0")
    private Long recomNo;
}
