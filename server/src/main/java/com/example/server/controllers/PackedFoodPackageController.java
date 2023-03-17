package com.example.server.controllers;

import com.example.server.entities.PackedFoodPackage;
import com.example.server.services.PackedFoodPackageService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/packedPackages")
public class PackedFoodPackageController {

    private PackedFoodPackageService packedFoodPackageService;

    @PostMapping("/saveCount")
     public void savePackedPackages(@RequestBody PackedFoodPackage packedFoodPackage){
        packedFoodPackageService.savePackedPackages(packedFoodPackage);
    }
}
