package com.project.backend.controller;

import com.project.backend.model.Adopter;
import com.project.backend.service.AdopterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/adopter")
public class AdopterController {
    @Autowired
    private AdopterService adopterService;

    @PostMapping("/register-adopter")
    public Adopter registerAdopter(@RequestBody Adopter adopter){ return adopterService.registerAdopter(adopter); }
    @PutMapping("/update-adopter/{adopterId}")
    public Adopter updateAdopter(@PathVariable int adopterId, @RequestBody Adopter update) {
        return adopterService.updateAdopter(adopterId, update);
    }
    @GetMapping("/get-adopter/id/{adopterId}")
    public Adopter getAdopterById(@PathVariable int adopterId) {
        return adopterService.getAdopterById(adopterId);
    }
    @GetMapping("/get-adopter/name/{adopterName}")
    public List<Adopter> getAdoptersByName(@PathVariable String adopterName) {
        List<Adopter> adoptersByName = new ArrayList<>();
        adoptersByName = adopterService.getAdoptersByName(adopterName);
        return adoptersByName;
    }
    @GetMapping("/get-adopter/email/{adopterEmail}")
    public List<Adopter> getAdoptersByEmail(@PathVariable String adopterEmail){
        List<Adopter> adoptersByEmail = new ArrayList<>();
        adoptersByEmail = adopterService.getAdoptersByEmail(adopterEmail);
        return adoptersByEmail;
    }
    @GetMapping("/get-adopter/phone/{adopterPhoneNumber}")
    public List<Adopter> getAdoptersByPhoneNumber(@PathVariable String adopterPhoneNumber){
        List<Adopter> adoptersByPhoneNumber = new ArrayList<>();
        adoptersByPhoneNumber = adopterService.getAdoptersByPhoneNumber(adopterPhoneNumber);
        return adoptersByPhoneNumber;
    }
    @GetMapping("/all-adopter")
    public List<Adopter> getAllAdopters() { return adopterService.getAllAdopters(); }
    @DeleteMapping("/delete-adopter/{adopterId}")
    public void deleteAdopter(@PathVariable int adopterId) { adopterService.deleteAdopter(adopterId); }
}
