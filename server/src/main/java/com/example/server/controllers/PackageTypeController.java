package com.example.server.controllers;

import com.example.server.entities.PackageType;
import com.example.server.services.PackageTypeService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/packageTypes")
public class PackageTypeController {
    private PackageTypeService packageTypeService;

    @PostMapping("/savePackageType")
    public void savePackageTypes(@RequestBody PackageType packageType){
        packageTypeService.SavePackageType(packageType);
    }

    // no need to save, they are pre-defined, we have just change the quantity with adding and issuing
}
