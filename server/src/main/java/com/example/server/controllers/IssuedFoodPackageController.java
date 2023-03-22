package com.example.server.controllers;

import com.example.server.entities.IssuedFoodPackage;
import com.example.server.services.IssuedFoodPackageService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/issuedPackages")
public class IssuedFoodPackageController {
    private IssuedFoodPackageService issuedFoodPackageService;

    @PostMapping("/saveICount")
    public void saveIssuedPackages(@RequestBody IssuedFoodPackage issuedFoodPackage){
        issuedFoodPackageService.saveIssuedPackages(issuedFoodPackage);
    }

    @GetMapping("/viewIssuedPackages")
    public List<IssuedFoodPackage> getAllIssuedFoodPackages()
    {
        return issuedFoodPackageService.getAllItems();
    }
}
