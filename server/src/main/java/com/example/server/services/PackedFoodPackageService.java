package com.example.server.services;

import com.example.server.entities.PackageType;
import com.example.server.entities.PackedFoodPackage;
import com.example.server.repositories.PackageTypeRepository;
import com.example.server.repositories.PackedFoodPackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PackedFoodPackageService {

    @Autowired
    private PackedFoodPackageRepository packedFoodPackageRepository;

    @Autowired
    private PackageTypeRepository packageTypeRepository;

    public PackedFoodPackage savePackedPackages(PackedFoodPackage packedFoodPackage){
        // Save the current amount
        PackedFoodPackage savedPackedFoodPackage = packedFoodPackageRepository.save(packedFoodPackage);

        // retrive current attributes
        PackageType packageType = savedPackedFoodPackage.getPackageType();
        packageType.setQuantity(packageType.getQuantity() + savedPackedFoodPackage.getPackedQuantity());
        packageTypeRepository.save(packageType);

        return savedPackedFoodPackage;
    }

    public List<PackedFoodPackage> getAllItems()
    {
        return packedFoodPackageRepository.findAll();
    }

//    public Optional<PackedFoodPackage> getPackedFoodPackageById(int id) {
//        return packedFoodPackageRepository.findById(id);
//    }
}
