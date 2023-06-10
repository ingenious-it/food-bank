package com.example.server.controllers;

import com.example.server.entities.RegisteredUser;
import com.example.server.loginconfig.LoginResponse;
import com.example.server.services.RegisteredUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3002")
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
    public ResponseEntity<LoginResponse> login(@RequestBody RegisteredUser loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword() ;
        System.out.println(loginRequest);
        LoginResponse loginResponse = registeredUserService.performLogin(username, password);

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
}
