package com.example.server.services;
import com.example.server.entities.IssuedFoodPackage;
import com.example.server.entities.PackageType;
import com.example.server.entities.PackedFoodPackage;
import com.example.server.repositories.IssuedFoodPackageRepository;
import com.example.server.repositories.PackageTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IssuedFoodPackageService {

    @Autowired
    private IssuedFoodPackageRepository issuedFoodPackageRepository;

    @Autowired
    private PackageTypeRepository packageTypeRepository;
    public IssuedFoodPackage saveIssuedPackages(IssuedFoodPackage issuedFoodPackage){
        // Save the current issuing amount
        IssuedFoodPackage savedIssuedFoodPackage = issuedFoodPackageRepository.save(issuedFoodPackage);

        // retrieve current attributes
        PackageType packageType = savedIssuedFoodPackage.getPackageType();
        if(packageType != null){
            packageType.setQuantity(packageType.getQuantity() - savedIssuedFoodPackage.getIssuedQuantity());
            packageTypeRepository.save(packageType);
        }
        return savedIssuedFoodPackage;
    }

    public List<IssuedFoodPackage> getAllItems()
    {
        return issuedFoodPackageRepository.findAll();
    }

}
