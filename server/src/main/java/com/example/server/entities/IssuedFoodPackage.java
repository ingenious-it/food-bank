package com.example.server.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name="issuedFoodPackage")
public class IssuedFoodPackage {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int issuedID;

    private String packageType;
    private Date issuedDate;
    private int issuedQuantity;
}
