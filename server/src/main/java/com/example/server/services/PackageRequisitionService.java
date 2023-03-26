package com.example.server.services;

import com.example.server.entities.PackageRequisition;
import com.example.server.repositories.PackageRequisitionRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PackageRequisitionService {
    @Autowired
    EntityManager entityManager;

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

    public Map<String, Long> getPackageCount() {
        Query query = entityManager.createQuery("SELECT p.PackageType, COUNT(*) FROM PackageRequisition p GROUP BY p.PackageType");
        List<Object[]> results = ((jakarta.persistence.Query) query).getResultList();
        Map<String, Long> packageCount = new HashMap<>();
        for (Object[] row : results) {
            String packageType = (String) row[0];
            long count = (long) row[1];
            packageCount.put(packageType, count);
        }
        return packageCount;
    }
}
