package com.sorune.gttapiserver.lolAPI.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@ToString(exclude = {"roles","favChamps"})
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String nickName;
    private String name;
    private String nameFull;
    private String country;
    private int age;
    private LocalDate birthDate;
    private String team;

    @ElementCollection(fetch = FetchType.LAZY)
    @Enumerated(EnumType.STRING)
    private List<Role> roles;
    @ElementCollection(fetch = FetchType.LAZY)
    private List<String> favChamps;


}
