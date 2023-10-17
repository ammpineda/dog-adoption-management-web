package com.project.backend.controller;

import com.project.backend.model.Adopter;
import com.project.backend.service.AdopterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AuthenticateController {
    @Autowired
    private AdopterService adopterService;
    @PostMapping("/adopter/login")
    public ResponseEntity<String> loginAsAdopter(@RequestBody Adopter user) {
        String email = user.getEmail();
        String password = user.getPassword();

        List<Adopter> adopters = adopterService.getAdoptersByEmail(email);

        if (adopters.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email");
        }

        for (Adopter adopter : adopters) {
            if (adopter.getPassword().equals(password)) {
                return ResponseEntity.ok("Adopter login successful");
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
    }
}
