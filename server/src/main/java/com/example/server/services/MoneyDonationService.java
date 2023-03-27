package com.example.server.services;

import com.example.server.entities.MoneyDonation;
import com.example.server.repositories.MoneyDonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MoneyDonationService {
    @Autowired
    private MoneyDonationRepository moneyDonationRepository;
    public MoneyDonation saveDonation(MoneyDonation moneyDonation)
    {
        return moneyDonationRepository.save(moneyDonation);

    }
}
