package com.sorune.gttapiserver.lolAPI.controller;

import com.sorune.gttapiserver.lolAPI.service.TournamentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/lol/")
public class LolAPIController {
    private final TournamentService tournamentService;

    @GetMapping("tournament/{tournamentId}")
    public Map<String, Object> getTournament(@PathVariable Long tournamentId) {
        return Map.of("tournament", tournamentService.getServerTournament(tournamentId));
    }
}
