package com.example.server.controllers;

import com.example.server.entities.RegisteredUser;
import com.example.server.entities.Victim;
import com.example.server.repositories.RegisteredUserRepository;
import com.example.server.services.VictimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000","http://localhost:54194" })
@RequestMapping("/Victim")
public class VictimController {
    @Autowired
    private VictimService victimService;
    @Autowired
    private RegisteredUserRepository registeredUserRepository;
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

    @GetMapping("/viewUnverifiedVictims") //View UnVerified Victims only Don't care about Delivery
    public List<Victim>showAllUnverifiedVictim()
    {
        List<Victim> unverifiedVictims=victimService.getAllUnverifiedVictims();
        return unverifiedVictims;
    }
    @GetMapping("/viewAllVerifiedVictims")
    public List<Victim> getAllVerifiedVictims() {
        List<Victim> verifiedVictims = victimService.getAcceptedandNeedtobeSelectDeliveryVictim();
        return verifiedVictims;
    }
//    @PutMapping("/{id}")
//    public ResponseEntity<Victim> updateVictim(@PathVariable Long id, @RequestBody Victim updatedVictim) {
//        Victim savedVictim = victimService.updateVictim(id, updatedVictim);
//        if (savedVictim != null) {
//            return ResponseEntity.ok(savedVictim);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
    @PutMapping("/{id}")
    public Victim updateTobeDeliver(@PathVariable Long id, @RequestBody Map<String, Boolean> requestBody) {
        Boolean isDeliverySelected = requestBody.get("isDeliverySelected");
//        Boolean isAccepted= requestBody.get("isAccepted");
        return victimService.updateTobeDeliverStatusStatus(id, isDeliverySelected);
    }



    @PutMapping("/selectAccept/{id}")
    public Victim updateVictim(@PathVariable Long id, @RequestBody Map<String, Boolean> requestBody) {
        Boolean isVerified = requestBody.get("isVerified");
        Boolean isAccepted = requestBody.get("isAccepted");
        Victim victim = victimService.updateAcceptanceStatus(id, isVerified, isAccepted);

        // Update RegisterUser's points based on the isAccepted value
        RegisteredUser donater = victim.getUser();
        if (isAccepted) {
            donater.setDataSupplierPoints(donater.getDataSupplierPoints() + 1);
        }
        // Save the updated RegisteredUser entity
        registeredUserRepository.save(donater);

        return victim;
    }


    @GetMapping("/viewToDelivery")
    public List<Victim> getAllToDeliveyVictims() {
        List<Victim> todeliveyVictims = victimService.getAcceptedAndSelectedtoDelivery();
        return todeliveyVictims;
    }
    @GetMapping("/viewRejectedVictims")
    public List<Victim> getRejectedVictims()
    {
        List<Victim> rejectedVictims = victimService.getRejectedVictims();
        return rejectedVictims;
    }

    @GetMapping("/viewAcceptedVictims")
    public List<Victim> getAcceptedVictims()
    {
        List<Victim> AcceptedVictims = victimService.getAcceptedVictims();
        return AcceptedVictims;
    }
    @GetMapping("/pending-count")
    public ResponseEntity<Long> getPendingVictimCount() {
        long count = victimService.getPendingVictimCount();
        return new ResponseEntity<>(count, HttpStatus.OK);
    }
    @PutMapping("/selectReject/{id}")
    public Victim updateVictimRejected(@PathVariable Long id, @RequestBody Map<String, Boolean> requestBody) {
    Boolean isVerified = requestBody.get("isVerified");
    Boolean isAccepted= requestBody.get("isAccepted");
        Victim victim = victimService.updateAcceptanceStatus(id, isVerified, isAccepted);
        RegisteredUser donater = victim.getUser();
        if (!isAccepted) {
            donater.setDataSupplierPoints(donater.getDataSupplierPoints() -1);
        }
        registeredUserRepository.save(donater);
    return victimService.updateVictimRejected(id, isVerified,isAccepted);


}





}
