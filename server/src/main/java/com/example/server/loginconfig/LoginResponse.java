package com.example.server.loginconfig;

public class LoginResponse {
        private String message;
        private String token;


    public LoginResponse(String message, String token) {
        this.message=message;
        this.token=token;

    }

    public String getToken() {
        return token;
    }
}


