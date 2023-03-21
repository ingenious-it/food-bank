package com.example.server.controllers;

import com.example.server.entities.Victim;
import com.example.server.services.VictimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
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


}
