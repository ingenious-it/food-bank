package com.example.server.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@Table(name="issued_food_package")
@NoArgsConstructor
@AllArgsConstructor
public class IssuedFoodPackage {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int issuedID;

    private String packageTypeName;
    private Date issuedDate;
    private int issuedQuantity;

    @ManyToOne
    @JoinColumn(name="typeID")
    private PackageType packageType;
}
