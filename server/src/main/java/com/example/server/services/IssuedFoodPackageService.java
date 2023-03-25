package com.example.server.services;
import com.example.server.entities.IssuedFoodPackage;
import com.example.server.repositories.IssuedFoodPackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IssuedFoodPackageService {

    @Autowired
    private IssuedFoodPackageRepository issuedFoodPackageRepository;

    public void saveIssuedPackages(IssuedFoodPackage issuedFoodPackage){
        issuedFoodPackageRepository.save(issuedFoodPackage);
    }

    public List<IssuedFoodPackage> getAllItems()
    {

        return issuedFoodPackageRepository.findAll();
    }

}