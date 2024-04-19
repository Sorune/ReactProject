package com.sorune.gttapiserver.player;

import com.sorune.gttapiserver.player.DTO.PlayerDTO;
import com.sorune.gttapiserver.player.service.PlayerService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/player")
public class PlayerController {

    private final PlayerService playerService;

    @GetMapping("/{pno}")
    public PlayerDTO getPlayer(@PathVariable("pno") Long pno) {
        PlayerDTO playerDTO = playerService.getById(pno);

        return playerDTO;
    }
}
