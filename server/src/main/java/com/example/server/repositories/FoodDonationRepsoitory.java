package com.example.server.repositories;

import com.example.server.entities.FoodDonation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodDonationRepsoitory extends JpaRepository <FoodDonation,String>{
}
