package com.example.server.controllers;

import com.example.server.entities.FoodDonation;
import com.example.server.services.FoodDonationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/FoodDonate")
public class FoodDonationController {
    @Autowired
    private FoodDonationService foodDonationService;
    @GetMapping("/view")
    public List<FoodDonation> getAllDonation() {

        return foodDonationService.getAllDonation();
    }
    @PostMapping("/saveDonation")
    public FoodDonation saveDonation(@RequestBody FoodDonation foodDonation)
    {
        return foodDonationService.SaveDonation(foodDonation);
    }


}
