package com.example.server.services;

import com.example.server.entities.FoodDonation;
import com.example.server.entities.RegisteredUser;
import com.example.server.repositories.FoodDonationRepsoitory;
import com.example.server.repositories.RegisteredUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegisteredUserService {  // access entity through repo
    @Autowired
    private RegisteredUserRepository registeredUserRepsoitory;

    public RegisteredUser SaveRegisteredUser(RegisteredUser registeredUser)//entity
    {

        return registeredUserRepsoitory.save(registeredUser);
    }
    public List<RegisteredUser> getAllRegisteredUser()
    {
        return registeredUserRepsoitory.findAll();
    }
}
