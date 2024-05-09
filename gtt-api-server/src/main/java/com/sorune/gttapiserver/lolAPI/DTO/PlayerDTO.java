package com.sorune.gttapiserver.lolAPI.DTO;

public class PlayerDTO {
    private String id;
    private String name;                    // 불필요 ( 아래에서 가져다 쓰면 될 듯 )
    private String nameFull;                // 영문 + 한글 이름 - 가공 필요
    private String country;                 // 불필요
    private String age;
    private String birthdate;
    private String team;
    private String team2;                   // 불필요
    private String role;
    private String favChamps;               // 선택 ( 조금 더 자세한 선수의 정보를 표시 )
    private String birthdatePrecision;      // 불필요
}
