package com.example.server.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="issuedFoodPackage")
public class IssuedFoodPackage {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int issuedID;

    private String packageType;
    private Date issuedDate;
    private int issuedQuantity;
}
