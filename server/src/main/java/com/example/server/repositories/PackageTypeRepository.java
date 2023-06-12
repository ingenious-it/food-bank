package com.example.server.repositories;


import com.example.server.entities.PackageType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackageTypeRepository extends JpaRepository<PackageType,Integer> {

}
