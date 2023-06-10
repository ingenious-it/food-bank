package com.example.server.repositories;

import com.example.server.entities.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeliveryRepository extends JpaRepository<Delivery, Integer> {


    int countByIsCompletedFalse();
}
