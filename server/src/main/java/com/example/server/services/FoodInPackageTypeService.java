package com.example.server.services;

import com.example.server.entities.FoodInPackageType;
import com.example.server.entities.FoodInPackageTypeID;
import com.example.server.entities.FoodItem;
import com.example.server.entities.PackageType;
import com.example.server.repositories.FoodInPackageTypeRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodInPackageTypeService {


    @Autowired
    private FoodInPackageTypeRepository foodInPackageTypeRepository;


    public List<FoodInPackageType> getAllFoodInPackageTypes() {
        return foodInPackageTypeRepository.findAll();
    }

    //get by Id
    public FoodInPackageType getFoodInPackageTypeById(Integer typeId, Integer id) {  //packageType and item id
        FoodItem foodItem = new FoodItem();
        foodItem.setId(id);
        PackageType packageType = new PackageType();
        packageType.setTypeID(typeId);
        FoodInPackageTypeID foodInPackageTypeId = new FoodInPackageTypeID(foodItem, packageType);
        return foodInPackageTypeRepository.findById(foodInPackageTypeId).orElseThrow(() -> new EntityNotFoundException("Food in package type not found"));
    }

    public FoodInPackageType saveFoodInPackageType(FoodInPackageType foodInPackageType) {
        return foodInPackageTypeRepository.save(foodInPackageType);
    }

    // update

    public FoodInPackageType updateFoodInPackageTypeQuantity(Integer typeId, Integer id, Integer quantity) {
        FoodItem foodItem = new FoodItem();
        foodItem.setId(id);
        PackageType packageType = new PackageType();
        packageType.setTypeID(typeId);
        FoodInPackageTypeID foodInPackageTypeId = new FoodInPackageTypeID(foodItem, packageType);

        FoodInPackageType foodInPackageType = foodInPackageTypeRepository.findById(foodInPackageTypeId)
                .orElseThrow(() -> new EntityNotFoundException("Food in package type not found"));

        foodInPackageType.setQuantityAvailable(quantity);

        return foodInPackageTypeRepository.save(foodInPackageType);
    }

}
