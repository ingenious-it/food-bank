package com.example.server.repositories;

import com.example.server.entities.PackageRequisition;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PackageRequisitionRepository extends JpaRepository<PackageRequisition , Integer> {
}
