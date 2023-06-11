package com.example.server.repositories;

import com.example.server.entities.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DeliveryRepository extends JpaRepository<Delivery, Integer> {
    List<Delivery> findByIsCompletedFalse();

}
