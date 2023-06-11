package com.example.server.controllers;

import com.example.server.entities.FoodDonation;
import com.example.server.services.FoodDonationService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3002","http://localhost:3000" })
@RequestMapping("/FoodDonate")
public class FoodDonationController {
    @Autowired
    private FoodDonationService foodDonationService; //frm the service class
    @GetMapping("/viewFoodDonations")
    public List<FoodDonation> getAllDonation() {

        return foodDonationService.getAllDonation();
    }
    @PostMapping("/saveDonation")
    public FoodDonation saveDonation(@RequestBody FoodDonation foodDonation)
    {
        return foodDonationService.SaveDonation(foodDonation);
    }


}
