package com.example.server.services;

import com.example.server.entities.AdminUser;
import com.example.server.loginConfigAdmin.JWTAuthenticationAdmin;
import com.example.server.loginConfigAdmin.LoginResponseAdmin;
import com.example.server.repositories.AdminUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminUserService {
    private final AdminUserRepository adminUserRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JWTAuthenticationAdmin jwtAuthenticationAdmin;
    @Autowired

    public AdminUserService(AdminUserRepository adminUserRepository , BCryptPasswordEncoder passwordEncoder, JWTAuthenticationAdmin jwtAuthenticationAdmin) {
        this.adminUserRepository = adminUserRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtAuthenticationAdmin = jwtAuthenticationAdmin;
    }
    public AdminUser saveAdminUser(AdminUser adminUser) {
        String encryptedPassword = passwordEncoder.encode(adminUser.getPassword());
        adminUser.setPassword(encryptedPassword);
        return adminUserRepository.save(adminUser);
    }
    public List<AdminUser> getAllAdminUser() {
        return adminUserRepository.findAll();
    }
    public AdminUser getAdminUserById(String userName) {
        return adminUserRepository.findById(userName).orElse(null);
    }



    public LoginResponseAdmin performlogin(String userName, String password) {
        AdminUser adminUser = adminUserRepository.findById(userName).orElse(null);
        System.out.println(adminUser);
        if (adminUser == null) {
            return new LoginResponseAdmin("User not found", false,null);
        } else {
            boolean isPasswordMatched = passwordEncoder.matches(password, adminUser.getPassword());
            if (isPasswordMatched) {
                String token= jwtAuthenticationAdmin.generateToken(userName);
                System.out.println(token);
                return new LoginResponseAdmin("Login Successful", true,token);
            } else {
                return new LoginResponseAdmin("Incorrect Password", false,null);
            }
        }
    }
}
