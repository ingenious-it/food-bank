package com.example.server.services;

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
    public void updateIsCollected(int donationId, boolean isCollected) {
        Optional<FoodDonation> foodDonationOptional = foodDonationRepsoitory.findById(donationId);
        foodDonationOptional.ifPresent(foodDonation -> {
            foodDonation.setIsCollected(isCollected);
            foodDonationRepsoitory.save(foodDonation);
        });
    }

    public void updateIsNotAvailable(int donationId, boolean isNotAvailable) {
        Optional<FoodDonation> foodDonationOptional = foodDonationRepsoitory.findById(donationId);
        foodDonationOptional.ifPresent(foodDonation -> {
            foodDonation.setIsNotAvailable(isNotAvailable);
            foodDonationRepsoitory.save(foodDonation);
        });
    }
    public List<FoodDonation> getPendingDonations() {
        return foodDonationRepsoitory.findByIsCollectedFalseAndIsNotAvailableFalse();
    }

    public List<FoodDonation> getPCollectedDonations() {
        return foodDonationRepsoitory.findByIsCollectedTrueAndIsNotAvailableFalse();
    }


}
