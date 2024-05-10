package com.sorune.gttapiserver.lolAPI.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "server_Team")
public class ServerTeam {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String teamName;
    private String location;

    @Column
    private String image;
    private String rosterPhoto;

    @OneToMany
    private List<ServerPlayer> serverPlayers;
}
