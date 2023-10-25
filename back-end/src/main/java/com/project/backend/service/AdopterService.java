package com.project.backend.service;

import com.project.backend.model.Admin;
import com.project.backend.model.Adopter;
import com.project.backend.model.Application;
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

    @Autowired
    ApplicationService applicationService;

    public Adopter registerAdopter(Adopter adopter){
        adopter.setFullName();
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
            existing.setFullName();
            return adopterRepository.save(existing);
        } else{
            return null;
        }
    }
    public void deleteAdopter(int adopterId) {
        Adopter adopter = adopterRepository.findById(adopterId).orElse(null);

        List<Application> applications = adopter.getApplications();

        // Delete each associated application
        if(applications != null && !applications.isEmpty()){
            for (Application application : applications) {
                applicationService.deleteApplication(application.getId());
            }
        }

        adopterRepository.deleteById(adopterId);

    }
    public List<Adopter> getAllAdopters(){ return (List<Adopter>) adopterRepository.findAll(); }
    public Adopter getAdopterById(int adopterId) {
        return adopterRepository.findById(adopterId).orElse(null);
    }
    public List<Adopter> getAdoptersByName(String adopterName){
        return adopterRepository.findByName(adopterName);
    }
    public List<Adopter> getAdoptersByEmail(String email) { return adopterRepository.findByEmail(email); }
    public List<Adopter> getAdoptersByPhoneNumber(String phoneNumber) { return adopterRepository.findByPhoneNumber(phoneNumber); }

    public Adopter getUserByEmail(String email) {
        return adopterRepository.findUserByEmail(email);
    }

    public Adopter getUserByPassword(String password){
        return adopterRepository.findUserByPassword(password);
    }
}
