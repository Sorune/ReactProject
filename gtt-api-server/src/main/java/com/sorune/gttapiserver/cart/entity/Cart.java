package com.sorune.gttapiserver.cart.entity;

import com.sorune.gttapiserver.common.entity.BaseEntity;
import com.sorune.gttapiserver.member.entity.Member;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDate;
import java.util.List;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
@DynamicInsert
@DynamicUpdate
public class Cart extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cno;

    private String productName;

    private String stadium;

    @ColumnDefault("1")
    private int quantity;

    private int totalPrice;

    private String anonymousId;

    private Long userNo;

    private String address;

    private String phoneNum;

    private LocalDate matchDate;






}
