package com.example.server.loginConfig;

public class LoginResponse {
    private String message;
    private boolean isLoginSuccess;
    private String token;
    public LoginResponse(String message, boolean isLoginSuccess,String token) {
        this.token=token;
        this.message = message;
        this.isLoginSuccess = isLoginSuccess;
    }
    public String getMessage() {
        return message;
    }
    public boolean isLoginSuccess() {
        return isLoginSuccess;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setLoginSuccess(boolean loginSuccess) {
        isLoginSuccess = loginSuccess;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

}