package com.example.server.controllers;

import com.example.server.entities.RegisteredUser;
import com.example.server.loginconfigDonation.LoginResponseDonation;
import com.example.server.services.RegisteredUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/RegisteredUser")
public class RegisteredUserController {
    @Autowired
    private RegisteredUserService registeredUserService;

    @PostMapping("/saveUser")
    public RegisteredUser saveUserDetails(@RequestBody RegisteredUser registeredUser)
    {
        System.out.println(registeredUser);
        return registeredUserService.SaveRegisteredUser(registeredUser);

    }
    @GetMapping("/getRegisteredUser")
    public List<RegisteredUser> getRegisteredUsers()
    {
        return registeredUserService.getAllRegisteredUser();
    }
    @GetMapping("/exists/{username}")
    public ResponseEntity<Boolean> checkUsernameExists(@PathVariable String username) {
        boolean exists = registeredUserService.checkUsernameExists(username);
        return ResponseEntity.ok(exists);
    }
    @PostMapping("/login")
    public ResponseEntity<LoginResponseDonation> login(@RequestBody RegisteredUser loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword() ;
        System.out.println(loginRequest);
        LoginResponseDonation loginResponse = registeredUserService.performLogin(username, password);

        if (loginResponse.getToken() != null) {
            System.out.println(loginResponse.getToken());
            return ResponseEntity.ok(loginResponse);

        } else if(loginResponse.getToken() == null) {
            System.out.println(loginResponse.getToken());
            return ResponseEntity.ok(loginResponse);}
            else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(loginResponse);
        }
    }
    @GetMapping("/getDataSupplier")
    public List<RegisteredUser> getDetails()
    {
        return registeredUserService.getUsersWithRoles();
    }
    @GetMapping("/top-data-suppliers")
    public List<Map<String, Object>> getTopDataSuppliers() {
        return registeredUserService.getTopDataSuppliers(); // Change the limit as per your requirement
    }
    @GetMapping("/top-donaters")
    public List<Map<String, Object>> getTopDonors() {
        return registeredUserService.getTopDonors();
    }
}
