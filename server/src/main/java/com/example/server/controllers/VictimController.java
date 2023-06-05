package com.example.server.controllers;

import com.example.server.entities.Victim;
import com.example.server.services.VictimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000","http://localhost:54194" })
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

//    @GetMapping("/{id}")
//    public Victim getVictimDetails(@PathVariable int id) {
//        return victimService.getVictimById(id);
//    }


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
    @GetMapping("/viewToDelivery")
    public List<Victim> getAllToDeliveyVictims() {
        List<Victim> todeliveyVictims = victimService.getAllToDeliveyVictims();
        return todeliveyVictims;
    }
}
