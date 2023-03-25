package com.example.server.repositories;

import com.example.server.entities.IssuedFoodPackage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IssuedFoodPackageRepository extends JpaRepository<IssuedFoodPackage,Integer> {
}
