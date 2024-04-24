package com.sorune.gttapiserver.news.DTO;

import com.sorune.gttapiserver.news.entity.News;
import lombok.*;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class NewsImageDTO {

    private Long imgNO;
    private String uuid;
    private String path;
    private String imgName;
    private News news;

    public String getImageURL(){
        try {
            return URLEncoder.encode(path + "/" + "uuid" + "_" + imgName, "UTF-8");
        } catch (UnsupportedEncodingException e){
            e.printStackTrace();
        }

        return "";
    }

    public String getThumbnailURL(){
        try {
            return URLEncoder.encode(path + "/s_" + uuid + "_" + imgName, "UTF-8");
        } catch (UnsupportedEncodingException e){
            e.printStackTrace();
        }

        return "";
    }
}
