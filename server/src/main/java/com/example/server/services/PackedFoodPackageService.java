package com.example.server.services;

import com.example.server.entities.PackedFoodPackage;
import com.example.server.repositories.PackedFoodPackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackedFoodPackageService {

    @Autowired
    private PackedFoodPackageRepository packedFoodPackageRepository;

    public void savePackedPackages(PackedFoodPackage packedFoodPackage){
        packedFoodPackageRepository.save(packedFoodPackage);
    }

    public List<PackedFoodPackage> getAllItems()
    {

        return packedFoodPackageRepository.findAll();
    }
}
