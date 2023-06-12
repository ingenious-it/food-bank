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
@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000","http://localhost:3002" })
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

    // Endpoint to update isCollected


    // Endpoint to update isNotAvailable
    @PutMapping("/collected/{id}")
    public ResponseEntity<String> updateIsCollected(@PathVariable("id") int donationId) {
        boolean updated = foodDonationService.updateIsCollected(donationId);
        if (updated) {
            return ResponseEntity.ok("Donation status updated successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(" not found.");
        }
    }
    @PutMapping("/pending/{id}")
    public ResponseEntity<String> updateIsNotAvailable(@PathVariable("id") int donationId) {
        boolean updated = foodDonationService.updateIsNotAvailable(donationId);
        if (updated) {
            return ResponseEntity.ok("Donation status updated successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(" not found.");
        }
    }








}
