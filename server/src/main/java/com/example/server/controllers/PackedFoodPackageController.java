package com.example.server.controllers;
import com.example.server.entities.PackedFoodPackage;
import com.example.server.services.PackedFoodPackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000","http://localhost:3002" })
@RequestMapping("/packedPackages")
public class PackedFoodPackageController {

    @Autowired
    PackedFoodPackageService packedFoodPackageService;

    @PostMapping("/saveCount")
     public void savePackedPackages(@RequestBody PackedFoodPackage packedFoodPackage){
        packedFoodPackageService.savePackedPackages(packedFoodPackage);
    }

    @GetMapping("/viewPackedPackages")
    public List<PackedFoodPackage> getAllPackedFoodPackages()
    {

        return packedFoodPackageService.getAllItems();
    }
}
