package com.example.server.services;

import com.example.server.entities.Delivery;
import com.example.server.entities.FoodDonation;
import com.example.server.repositories.FoodDonationRepsoitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodDonationService {  // access entity through repo
    @Autowired
    private FoodDonationRepsoitory foodDonationRepsoitory;

    public FoodDonation SaveDonation(FoodDonation foodDonation)//entity
    {

        return foodDonationRepsoitory.save(foodDonation);
    }
    public List<FoodDonation> getAllDonation()
    {

        return foodDonationRepsoitory.findAll();
    }


    public List<FoodDonation> getPendingDonations() {
        return foodDonationRepsoitory.findByIsCollectedFalseAndIsNotAvailableFalse();
    }

    public List<FoodDonation> getPCollectedDonations() {
        return foodDonationRepsoitory.findByIsCollectedTrueAndIsNotAvailableFalse();
    }

    // Method to update isCollected
    public boolean updateIsCollected(int foodDonationId) {
        FoodDonation foodDonation = foodDonationRepsoitory.findByDonationId(foodDonationId);
        if (foodDonation != null) {
            foodDonation.setIsCollected(true);
            foodDonationRepsoitory.save(foodDonation);
            return true;
        }
        return false;
    }
    public boolean updateIsNotAvailable(int foodDonationId) {
        FoodDonation foodDonation = foodDonationRepsoitory.findByDonationId(foodDonationId);
        if (foodDonation != null) {
            foodDonation.setIsNotAvailable(true);
            foodDonationRepsoitory.save(foodDonation);
            return true;
        }
        return false;
    }



}
