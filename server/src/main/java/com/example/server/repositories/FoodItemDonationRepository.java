package com.example.server.repositories;

import com.example.server.entities.FoodDonation;
import com.example.server.entities.FoodItem;
import com.example.server.entities.FoodItemDonation;
import com.example.server.entities.FoodItemDonationId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodItemDonationRepository extends JpaRepository<FoodItemDonation, FoodItemDonationId> {
}