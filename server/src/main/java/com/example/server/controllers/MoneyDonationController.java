package com.example.server.controllers;

import com.example.server.entities.MoneyDonation;
import com.example.server.services.MoneyDonationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000"})
@RequestMapping("/MoneyDonate")
public class MoneyDonationController {
    @Autowired
    private MoneyDonationService moneyDonationService;
    @PostMapping("/saveDonation")
    public MoneyDonation saveDonation(@RequestBody MoneyDonation moneyDonation)
    {
        return moneyDonationService.saveDonation(moneyDonation);
    }
}
