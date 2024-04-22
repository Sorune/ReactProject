package com.sorune.gttapiserver.player.repository;

import com.sorune.gttapiserver.player.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {

    Player findPlayerByPno(Long pno);
}
