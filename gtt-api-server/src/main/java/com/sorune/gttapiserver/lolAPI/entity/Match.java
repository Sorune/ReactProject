package com.sorune.gttapiserver.lolAPI.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDateTime;

@Entity
public class Match {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long matchId;

    @OneToOne
    private Team team1;
    @OneToOne
    private Team team2;

    @Column
    @ColumnDefault(value = "0")
    private Long team1Score;
    private Long team2Score;

    @Column
    private LocalDateTime matchDate;
}
