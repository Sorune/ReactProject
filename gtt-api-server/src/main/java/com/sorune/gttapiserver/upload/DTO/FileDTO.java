package com.sorune.gttapiserver.upload.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

@Data
@AllArgsConstructor
public class FileDTO {
    private String fileName;
    private String uuid;
    private String folderPath;

    public String getImageURL(){
        try {
            return URLEncoder.encode(folderPath + "/" + uuid + "_" + fileName, "UTF-8");
        } catch (UnsupportedEncodingException e){
            e.printStackTrace();
        }

        return "";
    }

    public String getThumbnailURL(){
        try {
            return URLEncoder.encode(folderPath + "/s_" + uuid + "_" + fileName, "UTF-8");
        } catch (UnsupportedEncodingException e){
            e.printStackTrace();
        }

        return "";
    }
}
