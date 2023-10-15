package com.project.backend.service;

import com.project.backend.model.Adopter;
import com.project.backend.repository.AdopterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AdopterService {
    @Autowired
    AdopterRepository adopterRepository;

    public Adopter registerAdopter(Adopter adopter){
        adopter.setRegisteredDate(new Date());
        return adopterRepository.save(adopter);
    }
    public Adopter updateAdopter(int adopterId, Adopter update){
        Optional<Adopter> existingOptional = adopterRepository.findById(adopterId);

        if(existingOptional.isPresent()){
            Adopter existing = existingOptional.get();

            if(update.getFirstName()!=null){
                existing.setFirstName(update.getFirstName());
            }
            if(update.getLastName()!=null){
                existing.setLastName(update.getLastName());
            }
            if(update.getDisplayImage()!=null){
                existing.setDisplayImage(update.getDisplayImage());
            }
            if(update.getEmail()!=null){
                existing.setEmail(update.getEmail());
            }
            if(update.getPassword()!=null){
                existing.setPassword(update.getPassword());
            }
            if(update.getPhoneNumber()!=null){
                existing.setPhoneNumber(update.getPhoneNumber());
            }
            if(update.getHomeAddress()!=null){
                existing.setHomeAddress(update.getHomeAddress());
            }
            return adopterRepository.save(existing);
        } else{
            return null;
        }
    }
    public void deleteAdopter(int adopterId) { adopterRepository.deleteById(adopterId); }
    public List<Adopter> getAllAdopters(){ return (List<Adopter>) adopterRepository.findAll(); }
    public Adopter getAdopterById(int adopterId) {
        return adopterRepository.findById(adopterId).orElse(null);
    }
    public List<Adopter> getAdopterByFirstName(String firstName) {
        return adopterRepository.findByFirstName(firstName);
    }
    public List<Adopter> getAdopterByLastName(String lastName) {
        return adopterRepository.findByLastName(lastName);
    }

}
