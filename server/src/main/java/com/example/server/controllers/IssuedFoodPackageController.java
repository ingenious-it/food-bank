package com.example.server.controllers;

import com.example.server.entities.IssuedFoodPackage;
import com.example.server.services.IssuedFoodPackageService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/issuedPackages")
public class IssuedFoodPackageController {
    private IssuedFoodPackageService issuedFoodPackageService;

    @PostMapping("/saveICount")
    public void saveIssuedPackages(@RequestBody IssuedFoodPackage issuedFoodPackage){
        issuedFoodPackageService.saveIssuedPackages(issuedFoodPackage);
    }
}
