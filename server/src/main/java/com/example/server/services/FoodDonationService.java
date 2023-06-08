package com.example.server.services;

import com.example.server.entities.FoodDonation;
import com.example.server.repositories.FoodDonationRepsoitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
