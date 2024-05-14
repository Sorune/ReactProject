package com.sorune.gttapiserver.lolAPI.controller;

import com.sorune.gttapiserver.common.DTO.PageRequestDTO;
import com.sorune.gttapiserver.common.DTO.PageResponseDTO;
import com.sorune.gttapiserver.lolAPI.DTO.ServerPlayerDTO;
import com.sorune.gttapiserver.lolAPI.DTO.ServerTeamDTO;
import com.sorune.gttapiserver.lolAPI.service.ServerPlayerService;
import com.sorune.gttapiserver.lolAPI.service.ServerTeamService;
import com.sorune.gttapiserver.lolAPI.service.TournamentService;
import com.sorune.gttapiserver.player.DTO.PlayerDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/lol/")
public class LolAPIController {
    private final TournamentService tournamentService;
    private final ServerPlayerService playerService;
    private final ServerTeamService teamService;

    @GetMapping("tournament/{tournamentId}")
    public Map<String, Object> getTournament(@PathVariable Long tournamentId) {
        return Map.of("tournament", tournamentService.getServerTournament(tournamentId));
    }

    @GetMapping("player/list")
    public PageResponseDTO<ServerPlayerDTO> list(PageRequestDTO pageRequestDTO) {
        return playerService.getPlayers(pageRequestDTO);
    }

    @GetMapping("team/list")
    public List<ServerTeamDTO> list() {
        return teamService.getServerTeams();
    }

    @GetMapping("player/{id}")
    public ServerPlayerDTO getPlayer(@PathVariable Long id) {
        return playerService.getPlayer(id);
    }

    @GetMapping("team/{id}")
    public ServerTeamDTO getTeam(@PathVariable Long id) {
        return teamService.getServerTeamById(id);
    }
}
