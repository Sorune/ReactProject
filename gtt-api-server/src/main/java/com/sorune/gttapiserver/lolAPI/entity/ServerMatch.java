package com.sorune.gttapiserver.lolAPI.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDateTime;

@Entity
@Table(name = "server_Match")
public class ServerMatch {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long matchId;

    @OneToOne
    private ServerTeam serverTeam1;
    @OneToOne
    private ServerTeam serverTeam2;

    @Column
    @ColumnDefault(value = "0")
    private Long team1Score;
    private Long team2Score;

    @Column
    private LocalDateTime matchDate;
}
