package com.example.server.controllers;

import com.example.server.entities.Victim;
import com.example.server.services.VictimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.server.repositories.VictimRepository;


import javax.swing.event.ListDataEvent;
import java.security.PublicKey;
import java.sql.ClientInfoStatus;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000"})
@RequestMapping("/Victim")
public class VictimController {
    @Autowired
    private VictimService victimService;
    @PostMapping("/saveVictimDetails")
    public Victim saveVictimDetails(@RequestBody Victim victim)
    { return victimService.saveVictimDetails(victim);

    }
    public VictimController(VictimService victimService) {
        this.victimService = victimService;
    }

    @GetMapping("/viewVictimDetails")
    public List<Victim> getAllVictimDetails() {

        return victimService.getAllVictimDetails();
    }



    @GetMapping("/viewUnverifiedVictims") //View UnVerified Victims only Don't care about Delivery
    public List<Victim>showAllUnverifiedVictim()
    {
        List<Victim> unverifiedVictims=victimService.showAllUnverifiedVictim();
        return unverifiedVictims;
    }
    @GetMapping("/viewVerifiedVictims") //View Verified Victims only Don't care about Delivery

        public List<Victim> showAllVerifiedVictim()
        {
            List<Victim> AllVerifiedVictims=victimService.showAllVerifiedVictim();
            return AllVerifiedVictims;
        }

    @GetMapping("/viewAllVerifiedVictims")
    public List<Victim> getAllVerifiedVictims() {
        List<Victim> verifiedVictims = victimService.getAllVerifiedVictims();
        return verifiedVictims;
    }
    @PutMapping("/{id}")
    public ResponseEntity<Victim> updateVictim(@PathVariable Long id, @RequestBody Victim updatedVictim) {
        Victim savedVictim = victimService.updateVictim(id, updatedVictim);
        if (savedVictim != null) {
            return ResponseEntity.ok(savedVictim);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/select/{id}")
    public Victim updateVictim(@PathVariable Long id, @RequestBody Map<String, Boolean> requestBody) {
        Boolean isVerified = requestBody.get("isVerified");
        return victimService.updateTheVictim(id, isVerified);
    }

    @GetMapping("/viewToDelivery")
    public List<Victim> getAllToDeliveyVictims() {
        List<Victim> todeliveyVictims = victimService.getAllToDeliveyVictims();
        return todeliveyVictims;
    }
    @GetMapping("/viewRejectedVictims")
    public List<Victim> getRejectedVictims()
    {
        List<Victim> rejectedVictims = victimService.getRejectedVictims();
        return rejectedVictims;
    }
}
