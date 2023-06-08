package com.example.server.controllers;

import com.example.server.entities.AdminUser;
import com.example.server.loginConfig.LoginResponse;
import com.example.server.services.AdminUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/createUser")
@CrossOrigin(origins = {"http://localhost:3001","http://localhost:3000"})

public class AdminUserController {
    @Autowired
    private  AdminUserService adminUserService;

@PostMapping("/saveAdminUser")
    public AdminUser saveAdminUser(@RequestBody AdminUser adminUser)
{
    return adminUserService.saveAdminUser(adminUser);
}
@PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody AdminUser adminUser)
{
    String userName=adminUser.getUserName();
    String password=adminUser.getPassword();
    System.out.println(adminUser);
    LoginResponse loginResponse=adminUserService.performlogin(userName,password);
    return ResponseEntity.ok(loginResponse);

}

    @GetMapping("/viewUserDetails")
    public List<AdminUser> getAllAdminUser() {
        return adminUserService.getAllAdminUser();
    }







}
