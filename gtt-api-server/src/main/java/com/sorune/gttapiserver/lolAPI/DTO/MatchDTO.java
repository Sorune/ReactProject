package com.sorune.gttapiserver.lolAPI.DTO;

import java.time.LocalDateTime;

public class MatchDTO {
    private String tournament;          // 시즌
    private String dateTimeUTC;
    private String team1;
    private String team2;
    private String winner;
    private String patch;               // 불필요
    private String link;                // 선수 객체로 들어가면 될 듯
    private String team;                // link 랑 묶으면 될 듯
    private String champion;            // 불필요
    private String summonerSpells;      // 불필요
    private String keystoneMastery;     // 불필요
    private String keystoneRune;        // 불필요
    private String role;                // link 랑 묶으면 될 듯
    private String gameId;              // 불필요
    private String side;                // 불필요
    private String dateTimePrecision;   // 불필요
}
