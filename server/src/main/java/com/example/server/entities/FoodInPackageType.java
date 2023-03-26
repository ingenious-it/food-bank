package com.example.server.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "food_in_package_type")
@Data
@NoArgsConstructor
@AllArgsConstructor
@IdClass(FoodInPackageTypeID.class)
public class FoodInPackageType {

    @Id
    @ManyToOne
    @JoinColumn(name = "typeID")
    private PackageType packageType;

    @Id
    @ManyToOne
    @JoinColumn(name = "id")
    private FoodItem foodItem;

    private int quantityAvailable;
}
