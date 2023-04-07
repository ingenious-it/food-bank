package com.example.server.repositories;

import com.example.server.entities.PackedFoodPackage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackedFoodPackageRepository extends JpaRepository<PackedFoodPackage,Integer> {
}
