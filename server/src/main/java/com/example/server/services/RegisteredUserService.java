package com.example.server.services;

import com.example.server.entities.RegisteredUser;
import com.example.server.loginconfigDonation.LoginResponseDonation;
import com.example.server.repositories.RegisteredUserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.*;

@Service
public class RegisteredUserService {  // access entity through repo

    @Autowired
    private RegisteredUserRepository registeredUserRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public RegisteredUserService() {
        passwordEncoder = new BCryptPasswordEncoder();
    }



    public RegisteredUser SaveRegisteredUser(RegisteredUser registeredUser)//entity
    {
        String encryptedPassword=passwordEncoder.encode(registeredUser.getPassword());
        registeredUser.setPassword(encryptedPassword);
        return registeredUserRepository.save(registeredUser);
    }
    public boolean checkUsernameExists(String username) {
        RegisteredUser user = registeredUserRepository.findByUsername(username);
        return user != null;
    }

    public List<RegisteredUser> getAllRegisteredUser()
    {
        return registeredUserRepository.findAll();
    }
    public boolean validateCredentials(String username, String password) {
        RegisteredUser user = registeredUserRepository.findByUsername(username);
//        password=passwordEncoder.encode(password);
        System.out.println(user);
        if (user != null) {
            System.out.println(passwordEncoder.encode(password));
            return passwordEncoder.matches(password,user.getPassword());
        }
        return false;
    }
    public String generateToken(String username) {
        // Generate JWT token
        RegisteredUser user = registeredUserRepository.findByUsername(username);
        byte[] secretKeyBytes = Keys.secretKeyFor(SignatureAlgorithm.HS512).getEncoded();
        String secretKey = Base64.getEncoder().encodeToString(secretKeyBytes);
        System.out.println(secretKey);
        String token = Jwts.builder()
                .claim("id", user.getId())
                .claim("firstName", user.getFirstName())
                .claim("lastName", user.getLastName())
                .claim("email", user.getEmail())
                .claim("contactNumber", user.getContactNumber())
                .claim("role",user.getRole())
                .claim("donaterPoints",user.getDonaterPoints())
                .claim("dataSupplierPoints",user.getDataSupplierPoints())
                .claim("userName",user.getUsername())
                .setSubject(user.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();

        return token;
    }

    public LoginResponseDonation performLogin(String username, String password) {
        // Perform login authentication
        boolean isValidCredentials = validateCredentials(username, password);
        System.out.println(isValidCredentials);
        if (isValidCredentials) {
            String token = generateToken(username);
            System.out.println(token);
            return new LoginResponseDonation("Login successful", token);
        } else {
            return new LoginResponseDonation("Invalid username or password", null);
        }
    }
    public List<RegisteredUser> getUsersWithRoles() {
        List<String> roles = Arrays.asList("Both", "DataSupplier");
        return registeredUserRepository.findByRoleIn(roles);
    }

    public String updateResetPasswordToken(String token, String email) {

        Optional<RegisteredUser> OptRegisteredUser = registeredUserRepository.findByEmail(email);

            RegisteredUser registeredUser = OptRegisteredUser.get();
            registeredUser.setResetPasswordToken(token);
            registeredUserRepository.save(registeredUser);
            return "password token updated";

    }


    public RegisteredUser getByResetPasswordToken(String resetPasswordToken){
        return registeredUserRepository.findByResetPasswordToken(resetPasswordToken).get();
    }

    public void updatePassword(String newPassword, RegisteredUser registeredUser){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodePassword = passwordEncoder.encode(newPassword);
        registeredUser.setPassword(encodePassword);
        registeredUserRepository.save(registeredUser);
    }
    public List<Map<String, Object>> getTopDataSuppliers() {
        Pageable pageable = PageRequest.of(0, 5); // Limiting to top 5 data suppliers
        return registeredUserRepository.findTopDataSuppliers(pageable);
    }
    public List<Map<String, Object>> getTopDonors() {
        Pageable pageable = PageRequest.of(0, 5); // Limiting to top 5 donors
        return registeredUserRepository.findTopDonors(pageable);
    }
}
