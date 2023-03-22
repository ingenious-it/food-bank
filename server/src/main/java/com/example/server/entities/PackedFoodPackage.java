package com.example.server.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name="packedFoodPackage")
public class PackedFoodPackage {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int packedID;

    private String packageType;
    private Date packedDate;
    private int packedQuantity;
}
