package com.example.server.services;
import com.example.server.entities.PackageType;
import com.example.server.repositories.PackageTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PackageTypeService {

    @Autowired
    private PackageTypeRepository packageTypeRepository;

    public PackageType SavePackageType(PackageType packageType)
    {
        return packageTypeRepository.save(packageType);
    }
    public List<PackageType> getAllPackageDetails()
    {
        return packageTypeRepository.findAll();
    }

}
