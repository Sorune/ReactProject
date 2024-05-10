package com.sorune.gttapiserver.lolAPI.repository;

import com.sorune.gttapiserver.lolAPI.entity.ServerTeam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ServerTeamRepository extends JpaRepository<ServerTeam, Long> {

    @Query("select distinct t from ServerTeam t  join fetch t.serverPlayers where t.id = :id")
    public ServerTeam findDetailById(Long id);

}
