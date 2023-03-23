package com.example.server.services;

import com.example.server.entities.PackageRequisition;
import com.example.server.repositories.PackageRequisitionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackageRequisitionService {
    private final PackageRequisitionRepository packageRequisitionRepository;

    @Autowired
    public PackageRequisitionService(PackageRequisitionRepository packageRequisitionRepository) {
        this.packageRequisitionRepository = packageRequisitionRepository;
    }

    public PackageRequisition savePackageRequisition(PackageRequisition packageRequisition) {
        return packageRequisitionRepository.save(packageRequisition);
    }

    public List<PackageRequisition> getAllPackageRequisition() {
        return packageRequisitionRepository.findAll();
    }
}
