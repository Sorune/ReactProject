package com.sorune.gttapiserver.player.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pno;
    private int age;
    private String nickName, realName, TeamName, position;
    private LocalDateTime birthDate;


    public void changeBirthDate(LocalDateTime birthDate){
        this.birthDate = birthDate;
    }
    public void changeRealName(String realName){
        this.realName = realName;
    }
    public void changeNickName(String nickName){
        this.nickName = nickName;
    }
    public void changeTeam(String teamName){
        this.TeamName = teamName;
    }
    public void changePosition(String position){
        this.position = position;
    }

}
