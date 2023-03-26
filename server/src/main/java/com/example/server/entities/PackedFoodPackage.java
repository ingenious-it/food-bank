package com.example.server.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@Table(name="packed_food_package")
@NoArgsConstructor
@AllArgsConstructor
public class PackedFoodPackage {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int packedID;

    private String packageTypeName;
    private Date packedDate;
    private int packedQuantity;

    @ManyToOne
    @JoinColumn(name="typeID")
    private PackageType packageType;
}
