package com.example.server.loginconfigDonation;

public class LoginResponseDonation {
        private String message;
        private String token;


    public LoginResponseDonation(String message, String token) {
        this.message=message;
        this.token=token;

    }

    public String getToken() {
        return token;
    }
}


