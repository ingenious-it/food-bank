package com.example.server.repositories;

import com.example.server.entities.Delivery;
import com.example.server.entities.FoodDonation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodDonationRepsoitory extends JpaRepository <FoodDonation,Integer>{
    List<FoodDonation> findByIsCollectedFalseAndIsNotAvailableFalse();
    List<FoodDonation> findByIsCollectedTrueAndIsNotAvailableFalse();
    FoodDonation findByDonationId(int id);



}
