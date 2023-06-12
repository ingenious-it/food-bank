package com.example.server.controllers;

import com.example.server.entities.DataSupplier;
import com.example.server.services.DataSupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("DataSupplier")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001","http://localhost:3001"})
public class DataSupplierController {

    @Autowired
    private DataSupplierService dataSupplierService;

    @PostMapping("/saveDataSupplier")
    public DataSupplier postDetails(@RequestBody DataSupplier dataSupplier)
    {
        return dataSupplierService.saveDetails(dataSupplier);

    }
    @GetMapping("/getDataSupplier")
    public List<DataSupplier> getDetails()
    {
        return dataSupplierService.getAllDetails();
    }
}
