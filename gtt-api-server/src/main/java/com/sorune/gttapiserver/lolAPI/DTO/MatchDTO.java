package com.sorune.gttapiserver.lolAPI.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sorune.gttapiserver.lolAPI.entity.Team;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Builder
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class MatchDTO {
    private Long matchId;
    private Team team1;
    private Team team2;
    private Long team1Score;
    private Long team2Score;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:MM:SS", timezone = "Asia/Seoul")
    private LocalDateTime matchDate;
}
