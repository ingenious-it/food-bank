package com.example.server.entities;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.io.Serializable;

public class FoodInPackageTypeID implements Serializable {
    private FoodItem foodItem;
    private PackageType packageType;

    public FoodInPackageTypeID(FoodItem foodItem, PackageType packageType) {
    }
}
