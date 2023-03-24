package com.example.server.controllers;

import com.example.server.entities.PackageRequisition;
import com.example.server.services.PackageRequisitionService;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000"})
@RequestMapping("/PackageRequisition")
public class PackageRequisitionController {
    @Autowired
    private PackageRequisitionService packageRequisitionService;

    @GetMapping("/viewPackageRequisition")
    public List<PackageRequisition> getAllPackageRequisition() {
        return packageRequisitionService.getAllPackageRequisition();
    }

    @PostMapping("/savePackageRequisition")
    public PackageRequisition savePackageRequisition(@RequestBody PackageRequisition packageRequisition) {
        return packageRequisitionService.savePackageRequisition(packageRequisition);
    }
    @GetMapping("/package-count")
    public Map<String, Long> getPackageCount() {
        return packageRequisitionService.getPackageCount();
    }


}
