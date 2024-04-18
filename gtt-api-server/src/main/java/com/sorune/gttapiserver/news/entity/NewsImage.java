package com.sorune.gttapiserver.news.entity;

import jakarta.persistence.Embeddable;
import lombok.*;

@Embeddable
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NewsImage {

    private String fileName;


}
