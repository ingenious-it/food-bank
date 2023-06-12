package com.example.server.services;
import com.example.server.entities.PackageType;
import com.example.server.repositories.PackageTypeRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

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

    public int getQuantityByTypeID(int typeID) {
        PackageType packageType = packageTypeRepository.findById(typeID).orElse(null);
        if (packageType != null) {
            return packageType.getQuantity();
        }
        return 0;
    }

    public void updateQuantityByTypeID(int typeID, int newQuantity) {
        Optional<PackageType> optionalPackageType = packageTypeRepository.findById(typeID);
        if (optionalPackageType.isPresent()) {
            PackageType packageType = optionalPackageType.get();
            packageType.setQuantity(newQuantity);
            packageTypeRepository.save(packageType);
        } else {
            throw new IllegalArgumentException("Invalid typeID: " + typeID);
        }
    }
    public List<Map<String, Object>> getPackageTypeQuantities() {
        List<PackageType> packageTypes = packageTypeRepository.findAll();
        return packageTypes.stream()
                .map(packageType -> {
                    Map<String, Object> map = Map.of(
                            "name", packageType.getTypeName(),
                            "value", packageType.getQuantity()
                    );
                    return map;
                })
                .collect(Collectors.toList());
    }




}
