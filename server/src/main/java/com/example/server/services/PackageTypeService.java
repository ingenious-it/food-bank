package com.example.server.services;
import com.example.server.entities.PackageType;
import com.example.server.repositories.PackageTypeRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PackageTypeService {

    @Autowired
    private PackageTypeRepository packageTypeRepository;

    public PackageType SavePackageType(PackageType packageType)//entity
    {
        return packageTypeRepository.save(packageType);
    }
    public List<PackageType> getAllPackageTypes()
    {
        return packageTypeRepository.findAll();
    }

//    public Optional<PackageType> getPackageTypeById(int id) {
//        return packageTypeRepository.findById(id);
//    }

    public int getQuantityByTypeID(int typeID) {
        PackageType packageType = packageTypeRepository.findById(typeID).orElse(null);
        if (packageType == null) {
            throw new EntityNotFoundException("Package type not found with ID: " + typeID);
        }
        return packageType.getQuantity();
    }
}
