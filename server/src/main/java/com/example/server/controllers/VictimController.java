package com.example.server.controllers;

import com.example.server.entities.Victim;
import com.example.server.services.VictimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/Victim")
public class VictimController {
    @Autowired
    private VictimService victimService;
    @PostMapping("/saveVictimDetails")
    public Victim saveVictimDetails(@RequestBody Victim victim)
    { return victimService.saveVictimDetails(victim);

    }

    @GetMapping("/viewVictimDetails")
    public List<Victim> getAllVictimDetails() {

        return victimService.getAllVictimDetails();
    }

//    @GetMapping("/{id}")
//    public Victim getVictimDetails(@PathVariable int id) {
//        return victimService.getVictimById(id);
//    }

    @GetMapping("/viewVictimDetails/{id}")
    public String getVictimDetails(@PathVariable int id) {
        Victim victim = victimService.getVictimById(id);
        String name = victim.getFirstName() + " " + victim.getLastName();
        String address = victim.getNo() + " " + victim.getStreet() + " " + victim.getCity();

        return "Name: " + name + "\nAddress: " + address;

    }


}
