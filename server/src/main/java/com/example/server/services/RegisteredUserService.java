package com.example.server.services;

import com.example.server.entities.FoodDonation;
import com.example.server.entities.RegisteredUser;
import com.example.server.loginconfig.LoginResponse;
import com.example.server.repositories.FoodDonationRepsoitory;
import com.example.server.repositories.RegisteredUserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.Date;
import java.util.List;

@Service
public class RegisteredUserService {  // access entity through repo
    @Autowired
    private RegisteredUserRepository registeredUserRepository;

    public RegisteredUser SaveRegisteredUser(RegisteredUser registeredUser)//entity
    {

        return registeredUserRepository.save(registeredUser);
    }
    public List<RegisteredUser> getAllRegisteredUser()
    {
        return registeredUserRepository.findAll();
    }
    public boolean validateCredentials(String username, String password) {
        RegisteredUser user = registeredUserRepository.findByUsername(username);
        System.out.println(user);
        if (user != null) {
            System.out.println(user.getPassword().equals(password));
            return user.getPassword().equals(password);
        }
        return false;
    }
    public String generateToken(String username) {
        // Generate JWT token
        byte[] secretKeyBytes = Keys.secretKeyFor(SignatureAlgorithm.HS512).getEncoded();
        String secretKey = Base64.getEncoder().encodeToString(secretKeyBytes);
        System.out.println(secretKey);
                String token = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+1000*60*60*10))
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();

        return token;
    }

    public LoginResponse performLogin(String username, String password) {
        // Perform login authentication
        boolean isValidCredentials = validateCredentials(username, password);
        System.out.println(isValidCredentials);
        if (isValidCredentials) {
            String token = generateToken(username);
            System.out.println(token);
            return new LoginResponse("Login successful", token);
        } else {
            return new LoginResponse("Invalid username or password", null);
        }
    }
}
