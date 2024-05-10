package com.sorune.gttapiserver.lolAPI.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sorune.gttapiserver.lolAPI.entity.ServerTeam;
import lombok.*;

import java.time.LocalDateTime;

@Builder
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ServerMatchDTO {
    private Long matchId;
    private ServerTeamDTO serverTeam1;
    private ServerTeamDTO serverTeam2;
    private Long team1Score;
    private Long team2Score;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:MM:SS", timezone = "Asia/Seoul")
    private LocalDateTime matchDate;
}
