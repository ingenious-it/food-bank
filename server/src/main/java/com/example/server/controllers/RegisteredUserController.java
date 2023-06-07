package com.example.server.controllers;

import com.example.server.entities.FoodDonation;
import com.example.server.entities.RegisteredUser;
import com.example.server.entities.Victim;
import com.example.server.services.FoodDonationService;
import com.example.server.services.RegisteredUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3002")
@RequestMapping("/RegisteredUser")
public class RegisteredUserController {
    @Autowired
    private RegisteredUserService registeredUserService; //from the service class
//    @GetMapping("/getAllRegisteredUser")
//    public List<RegisteredUser> getAllRegisteredUser() {           for data supplier
//        return registeredUserService.getAllRegisteredUser();
//    }
//    @PostMapping("/saveRegisteredUser")
//    public RegisteredUser saveRegisteredUser(@RequestBody RegisteredUser registeredUser)
//    {
//        registeredUser.setId(null); // Set the id to null to trigger the auto-generation
//        RegisteredUser returnData=null;
//        try {
//            returnData=registeredUserService.SaveRegisteredUser(registeredUser);
//        }catch(DataAccessException exception){
//            System.out.println(exception.getMessage());
//        }
//        return returnData;
//    }

    @PostMapping("/saveUser")
    public RegisteredUser saveUserDetails(@RequestBody RegisteredUser registeredUser)
    { return registeredUserService.SaveRegisteredUser(registeredUser);

    }
}
