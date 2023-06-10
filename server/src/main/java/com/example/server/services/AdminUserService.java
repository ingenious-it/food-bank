package com.example.server.services;

import com.example.server.entities.AdminUser;
import com.example.server.repositories.AdminUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminUserService {
    private final AdminUserRepository adminUserRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    @Autowired

    public AdminUserService(AdminUserRepository adminUserRepository , BCryptPasswordEncoder passwordEncoder) {
        this.adminUserRepository = adminUserRepository;
        this.passwordEncoder = passwordEncoder;
    }
    public AdminUser saveAdminUser(AdminUser adminUser) {
        String encryptedPassword = passwordEncoder.encode(adminUser.getPassword());
        adminUser.setPassword(encryptedPassword);
        return adminUserRepository.save(adminUser);
    }
    public List<AdminUser> getAllAdminUser() {
        return adminUserRepository.findAll();
    }

}
