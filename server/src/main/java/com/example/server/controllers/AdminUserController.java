package com.example.server.controllers;

import com.example.server.entities.AdminUser;
import com.example.server.entities.Delivery;
import com.example.server.services.AdminUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/createUser")
@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000"})

public class AdminUserController {
    @Autowired
    private  AdminUserService adminUserService;

    @PostMapping("/UserDetails")
    public AdminUser saveDelivery(@RequestBody AdminUser adminUser) {
        return adminUserService.saveAdminUser(adminUser);
    }
    @GetMapping("/viewUserDetails")
    public List<AdminUser> getAllAdminUser() {
        return adminUserService.getAllAdminUser();
    }







}
