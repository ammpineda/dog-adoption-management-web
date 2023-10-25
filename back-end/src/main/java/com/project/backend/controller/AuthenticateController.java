package com.project.backend.controller;

import com.project.backend.model.Admin;
import com.project.backend.model.Adopter;
import com.project.backend.model.LoginRequest;
import com.project.backend.model.LoginResponse;
import com.project.backend.service.AdminService;
import com.project.backend.service.AdopterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class AuthenticateController {
    @Autowired
    private AdopterService adopterService;

    @Autowired
    private AdminService adminService;

    @PostMapping("/api/admin/login")
    public ResponseEntity<String> loginAsAdmin(@RequestBody LoginRequest user) {

        Admin confirmUser = adminService.getAdminByEmail(user.getEmail());
        Admin confirmPass = adminService.getAdminByPassword(user.getPassword());

        if (confirmUser != null && confirmPass != null) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
        }
    }

    @PostMapping("/api/adopter/login")
    public ResponseEntity<LoginResponse> loginAsAdopter(@RequestBody LoginRequest user) {
        Adopter confirmUser = adopterService.getUserByEmail(user.getEmail());

        if (confirmUser != null && confirmUser.getPassword().equals(user.getPassword())) {
            int userId = confirmUser.getId();
            return ResponseEntity.ok(new LoginResponse(userId, "Login successful"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new LoginResponse(0, "Login failed"));
        }
    }

}
