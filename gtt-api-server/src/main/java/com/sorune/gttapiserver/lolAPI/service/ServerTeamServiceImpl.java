package com.sorune.gttapiserver.lolAPI.service;

import com.sorune.gttapiserver.lolAPI.DTO.ServerTeamDTO;
import com.sorune.gttapiserver.lolAPI.entity.ServerTeam;
import com.sorune.gttapiserver.lolAPI.entity.ServerTournament;
import com.sorune.gttapiserver.lolAPI.repository.ServerTeamRepository;
import com.sorune.gttapiserver.lolAPI.repository.ServerTournamentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
@Log4j2
public class ServerTeamServiceImpl implements ServerTeamService {
    private final ServerTournamentRepository tournamentRepository;
    private final ServerTeamRepository serverTeamRepository;
    private final ModelMapper modelMapper;

    @Override
    public List<ServerTeamDTO> getServerTeams() {
        List<ServerTeam> serverTeams = serverTeamRepository.findAll();
        List<ServerTeamDTO> dtoList = serverTeams.stream().map(serverTeam -> modelMapper.map(serverTeam, ServerTeamDTO.class)).toList();

        return dtoList;
    }

    @Override
    public ServerTeamDTO getServerTeamById(Long id) {
        log.info(id);

        ServerTeam serverTeam = serverTeamRepository.findByServerPlayersId(id);
        log.info(serverTeam.toString());
        ServerTeamDTO dto = modelMapper.map(serverTeam, ServerTeamDTO.class);

        log.info(dto);

        return dto;
    }

    @Override
    public ServerTeamDTO getLatestWinnerTeam() {
        ServerTournament serverTournament = tournamentRepository.findTopByChallengerNotNullOrderByStartDateDesc();
        return modelMapper.map(serverTeamRepository.findByTeamName(serverTournament.getChallenger()), ServerTeamDTO.class);
    }
}
