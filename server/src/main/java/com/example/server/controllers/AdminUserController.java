package com.example.server.controllers;

import com.example.server.entities.AdminUser;
import com.example.server.loginConfigAdmin.LoginResponseAdmin;
import com.example.server.services.AdminUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/createUser")
@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000","http://localhost:3002"})

public class AdminUserController {
    @Autowired
    private  AdminUserService adminUserService;


    @PostMapping("/saveAdminUser")
    public AdminUser saveAdminUser(@RequestBody AdminUser adminUser)
    {
        return adminUserService.saveAdminUser(adminUser);
    }
    @PostMapping("/login")
    public ResponseEntity<LoginResponseAdmin> login(@RequestBody AdminUser adminUser)
    {
        String userName=adminUser.getUserName();
        String password=adminUser.getPassword();
        System.out.println(adminUser);
        LoginResponseAdmin loginResponseAdmin =adminUserService.performlogin(userName,password);
        return ResponseEntity.ok(loginResponseAdmin);

    }

    @GetMapping("/viewUserDetails")
    public List<AdminUser> getAllAdminUser() {
        return adminUserService.getAllAdminUser();
    }
    @PutMapping("/update")
    public ResponseEntity<AdminUser> updateAdminUser(@RequestBody AdminUser adminUser) {
        AdminUser existingAdminUser = adminUserService.getAdminUserById(adminUser.getUserName());
        if (existingAdminUser != null) {
            existingAdminUser.setPassword(adminUser.getPassword());
            existingAdminUser.setUserRole(adminUser.getUserRole());
            AdminUser updatedAdminUser = adminUserService.saveAdminUser(existingAdminUser);
            return new ResponseEntity<>(updatedAdminUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
}
    @GetMapping("/exists/{username}")
    public ResponseEntity<Boolean> checkUsernameExists(@PathVariable String username) {
        boolean exists = adminUserService.checkUsernameExists(username);
        return ResponseEntity.ok(exists);
    }




}
