package com.sorune.gttapiserver.lolAPI.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = {"matches"})
public class Tournament {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String name;
    private String region;
    private String country;
    private String league;

    @Column(nullable = false)
    private LocalDate startDate;
    private LocalDate endDate;

    @ElementCollection(fetch = FetchType.LAZY)
    @OneToMany
    private List<Match> matches;
}
