package com.example.server.repositories;

import com.example.server.entities.FoodInPackageType;
import com.example.server.entities.FoodInPackageTypeID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodInPackageTypeRepository extends JpaRepository<FoodInPackageType, FoodInPackageTypeID> {
}
