package com.project.backend.controller;

import com.project.backend.model.Dog;
import com.project.backend.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/dog")
public class DogController {
    @Autowired
    private DogService dogService;

    @PostMapping("/register-dog")
    public Dog registerDog(@RequestBody Dog dog) {
        return dogService.registerDog(dog);
    }
    @PutMapping("/update-dog/{dogId}")
    public Dog updateDog(@PathVariable int dogId, @RequestBody Dog update) {
        return dogService.updateDog(dogId, update);
    }
    @DeleteMapping("/delete-dog/{dogId}")
    public void deleteDog(@PathVariable int dogId) {
        dogService.deleteDog(dogId);
    }
    @GetMapping("/get-dog/id/{id}")
    public Dog getDogById(@PathVariable int id) {
        return dogService.getDogById(id);
    }
    @GetMapping("/get-dog/name/{name}")
    public List<Dog> getDogsByName(@PathVariable String name) {
        return dogService.getDogsByName(name);
    }
    @GetMapping("/get-dog/gender/{gender}")
    public List<Dog> getDogsByGender(@PathVariable String gender) {
        return dogService.getDogsByGender(gender);
    }
    @GetMapping("/get-dog/status/{status}")
    public List<Dog> getDogsByAdoptionStatus(@PathVariable String status) {
        return dogService.getDogsByAdoptionStatus(status);
    }
    @GetMapping("/all-dog")
    public List<Dog> getAllDogs() {
        return dogService.getAllDogs();
    }


}
