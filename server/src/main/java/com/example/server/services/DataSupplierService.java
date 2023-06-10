package com.example.server.services;

import com.example.server.entities.DataSupplier;
import com.example.server.repositories.DataSupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataSupplierService {
    @Autowired
    private DataSupplierRepository dataSupplierRepository;

    public DataSupplier saveDetails(DataSupplier dataSupplier){

        return dataSupplierRepository.save(dataSupplier);
    }
    public List<DataSupplier> getAllDetails()
    {
        return dataSupplierRepository.findAll();
    }
}
