package com.project.backend.service;

import com.project.backend.model.Adopter;
import com.project.backend.model.Application;
import com.project.backend.model.Dog;
import com.project.backend.repository.AdopterRepository;
import com.project.backend.repository.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ApplicationService {
    @Autowired
    private ApplicationRepository applicationRepository;
    @Autowired
    private AdopterService adopterService;
    @Autowired
    private DogService dogService;
    public Application createApplication(Application application) {
        Adopter applicant = adopterService.getAdopterById(application.getApplicant().getId());
        Dog dog = dogService.getDogById(application.getDog().getId());

        application.setApplicant(applicant);

        dog.setAdoptionStatus("Reserved");
        application.setDog(dog);

        application.setSubmittedDate(new Date());
        return applicationRepository.save(application);
    }

    public Application updateApplication(int applicationId, Application update){
        Optional<Application> existingOptional = applicationRepository.findById(applicationId);

        if(existingOptional.isPresent()){
            Application existing = existingOptional.get();

            if (update.getStatus()!=null){
                existing.setStatus(update.getStatus());
            }
            if (update.getReviewDate()!=null){
                existing.setReviewDate(update.getReviewDate());
            }
            if (update.getApprovalDate()!=null){
                existing.setApprovalDate(update.getApprovalDate());
            }
            if (update.getApplicant()!=null){
                existing.setApplicant(update.getApplicant());
            }
            if (update.getDog()!=null){
                existing.setDog(update.getDog());
            }
            return applicationRepository.save(existing);
        }else{
            return null;
        }
    }

    public List<Application> getAllApplications() {
        return (List<Application>) applicationRepository.findAll();
    }

    public Application getApplicationById(int id) {
        return applicationRepository.findById(id).orElse(null);
    }

    public List<Application> searchByApplicantName(String applicantName) {
        return applicationRepository.findByApplicantName(applicantName);
    }

    public List<Application> searchByDogName(String dogName) {
        return applicationRepository.findByDogName(dogName);
    }

    public void deleteApplication(int applicationId){
        applicationRepository.deleteById(applicationId);
    }

}
