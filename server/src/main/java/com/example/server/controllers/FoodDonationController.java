package com.example.server.controllers;

import com.example.server.entities.FoodDonation;
import com.example.server.services.FoodDonationService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/pending")
    public ResponseEntity<List<FoodDonation>> getPendingDonations() {
        List<FoodDonation> pendingDonations = foodDonationService.getPendingDonations();
        return new ResponseEntity<>(pendingDonations, HttpStatus.OK);
    }

    @GetMapping("/collected")
    public ResponseEntity<List<FoodDonation>> getCollectedDonations() {
        List<FoodDonation> collectedDonations = foodDonationService.getPCollectedDonations();
        return new ResponseEntity<>(collectedDonations, HttpStatus.OK);
    }

    @PutMapping("/{donationId}/is-collected")
    public ResponseEntity<String> updateIsCollected(
            @PathVariable int donationId,
            @RequestParam boolean isCollected
    ) {
        foodDonationService.updateIsCollected(donationId, isCollected);
        return new ResponseEntity<>("isCollected updated successfully", HttpStatus.OK);
    }

    @PutMapping("/{donationId}/is-not-available")
    public ResponseEntity<String> updateIsNotAvailable(
            @PathVariable int donationId,
            @RequestParam boolean isNotAvailable
    ) {
        foodDonationService.updateIsNotAvailable(donationId, isNotAvailable);
        return new ResponseEntity<>("isNotAvailable updated successfully", HttpStatus.OK);
    }


}
