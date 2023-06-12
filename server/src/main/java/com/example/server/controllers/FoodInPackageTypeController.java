package com.example.server.controllers;

import com.example.server.entities.FoodInPackageType;
import com.example.server.services.FoodInPackageTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000","http://localhost:3002" })
@RequestMapping("/food-in-package-types")
public class FoodInPackageTypeController {

    @Autowired
    private FoodInPackageTypeService foodInPackageTypeService;

    @GetMapping
    public List<FoodInPackageType> getAllFoodInPackageTypes() {
        return foodInPackageTypeService.getAllFoodInPackageTypes();
    }

    @GetMapping("viewTypeQuantities/{typeId}/{id}")
    public FoodInPackageType getFoodInPackageTypeById(@PathVariable Integer typeId, @PathVariable Integer id) {
        return foodInPackageTypeService.getFoodInPackageTypeById(typeId, id);
    }

    @PostMapping
    public FoodInPackageType saveFoodInPackageType(@RequestBody FoodInPackageType foodInPackageType) {
        return foodInPackageTypeService.saveFoodInPackageType(foodInPackageType);
    }

    @PutMapping("updateQuantities/{typeId}/{id}/{quantity}")
    public FoodInPackageType updateFoodInPackageTypeQuantity(
            @PathVariable Integer typeId,
            @PathVariable Integer id,
            @PathVariable Integer quantity
    ) {
        return foodInPackageTypeService.updateFoodInPackageTypeQuantity(typeId, id, quantity);
    }
}
