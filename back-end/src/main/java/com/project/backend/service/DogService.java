package com.project.backend.service;

import com.project.backend.model.Adopter;
import com.project.backend.model.Application;
import com.project.backend.model.Dog;
import com.project.backend.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class DogService {
    @Autowired
    DogRepository dogRepository;

    @Autowired
    ApplicationService applicationService;

    public Dog registerDog(Dog dog){
        dog.setRegisteredDate(new Date());
        dog.setAge(dog.getBirthDate());
        dog.setAdoptionStatus("Open");
        return dogRepository.save(dog);
    }

    public Dog updateDog(int dogId, Dog update){
        Optional<Dog> existingOptional = dogRepository.findById(dogId);

        if(existingOptional.isPresent()){
            Dog existing = existingOptional.get();

            if(update.getName()!=null){
                existing.setName(update.getName());
            }
            if(update.getDisplayImage()!=null){
                existing.setDisplayImage(update.getDisplayImage());
            }
            if(update.getBreed()!=null){
                existing.setBreed(update.getBreed());
            }
            if(update.getBirthDate()!=null){
                existing.setBirthDate(update.getBirthDate());
                existing.setAge(update.getBirthDate());
            }
            if(update.getGender()!=null){
                existing.setGender(update.getGender());
            }
            if(update.getColor()!=null){
                existing.setColor(update.getColor());
            }
            if(update.getSize()!=null){
                existing.setSize(update.getSize());
            }
            if(update.getAdoptionStatus()!=null){
                existing.setAdoptionStatus(update.getAdoptionStatus());
            }
            if(update.getDescription()!=null){
                existing.setDescription(update.getDescription());
            }
            if(update.getApplication()!=null){
                existing.setApplication(update.getApplication());
            }

            return dogRepository.save(existing);
        } else{
            return null;
        }
    }

    public void deleteDog(int dogId) {
        Dog dog = dogRepository.findById(dogId).orElse(null);

        Application application = dog.getApplication();

        // Delete each associated application
        if(application != null){
                applicationService.deleteApplication(application.getId());
        }
        dogRepository.deleteById(dogId);
    }

    public List<Dog> getAllDogs(){ return (List<Dog>) dogRepository.findAll(); }

    public Dog getDogById(int id) {
        return dogRepository.findById(id).orElse(null);
    }

    public List<Dog> getDogsByName(String name) {
        return dogRepository.findByName(name);
    }

    public List<Dog> getDogsByGender(String gender) {
        return dogRepository.findByGender(gender);
    }

    public List<Dog> getDogsByAdoptionStatus(String adoptionStatus) {
        return dogRepository.findByAdoptionStatus(adoptionStatus);
    }

}
