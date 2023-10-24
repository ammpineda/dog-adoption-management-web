package com.project.backend.model;

public class LoginResponse {
    private int userId;
    private String message;

    public LoginResponse(int userId, String message) {
        this.userId = userId;
        this.message = message;
    }

    public LoginResponse(){

    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
