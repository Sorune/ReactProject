package com.sorune.gttapiserver.lolAPI.service;

import com.sorune.gttapiserver.lolAPI.DTO.ServerTeamDTO;

import java.util.List;

public interface ServerTeamService {
    List<ServerTeamDTO> getServerTeams();

    ServerTeamDTO getServerTeamById(Long id);

    ServerTeamDTO getLatestWinnerTeam();

    List<ServerTeamDTO> getTeamsWithOutPlayers();
}
