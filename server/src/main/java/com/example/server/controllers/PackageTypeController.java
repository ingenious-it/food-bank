package com.example.server.controllers;

import com.example.server.entities.PackageType;
import com.example.server.services.PackageTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/packageTypes")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3000"})
public class PackageTypeController {
    @Autowired
    private PackageTypeService packageTypeService;

    @PostMapping("/savePackageType")
    public void savePackageTypes(@RequestBody PackageType packageType){
        packageTypeService.SavePackageType(packageType);
    }
    // no need to save, they are pre-defined, we have just change the quantity with adding and issuing
    @GetMapping("/viewPackageType")
    public List<PackageType> getAllPackageTypes() {
        return packageTypeService.getAllPackageDetails();
    }


}
