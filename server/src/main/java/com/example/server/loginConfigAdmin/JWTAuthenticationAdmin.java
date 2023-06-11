package com.example.server.loginConfigAdmin;

import com.example.server.entities.AdminUser;
import com.example.server.repositories.AdminUserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.Date;

@Service
public class JWTAuthenticationAdmin {
    @Autowired
    AdminUserRepository adminUserRepository;

    public String generateToken(String userName) {
        AdminUser adminUser = adminUserRepository.findById(userName).orElse(null);
        byte[] secretKeyBytes= Keys.secretKeyFor(SignatureAlgorithm.HS512).getEncoded();
        String secretKey= Base64.getEncoder().encodeToString(secretKeyBytes);
        String token= Jwts.builder()
                .claim("userName",adminUser.getUserName())
                .claim("role",adminUser.getUserRole())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+1000*60*60*10))
                .signWith(SignatureAlgorithm.HS512,secretKey)
                .compact();
        return token;

    }

}
