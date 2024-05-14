package com.sorune.gttapiserver.lolAPI.repository;

import com.sorune.gttapiserver.lolAPI.entity.ServerPlayer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ServerPlayerRepository extends JpaRepository<ServerPlayer,Long> {

    @Query("SELECT sp FROM ServerPlayer sp join sp.roles join sp.favChamps")
    Page<ServerPlayer> getAllPlayerWithAll(Pageable pageable);
}
