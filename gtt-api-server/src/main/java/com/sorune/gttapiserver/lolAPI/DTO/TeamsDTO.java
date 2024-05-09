package com.sorune.gttapiserver.lolAPI.DTO;

import java.util.List;

public class TeamsDTO {
    private String name;
    private String image;
    private String location;            // 불필요
    private String rosterPhoto;         // 선택 ( 선수 단체 이미지 )
    private List<PlayerDTO> players;

}
