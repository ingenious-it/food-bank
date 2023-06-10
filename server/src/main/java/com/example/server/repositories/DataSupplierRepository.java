package com.example.server.repositories;

import com.example.server.entities.DataSupplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DataSupplierRepository extends JpaRepository<DataSupplier,Integer> {
}
