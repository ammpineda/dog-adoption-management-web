package com.project.backend.controller;

import com.project.backend.model.Application;
import com.project.backend.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/application")
public class ApplicationController {
    @Autowired
    private ApplicationService applicationService;

    @PostMapping("/submit")
    public Application submitApplication(@RequestBody Application application){
        return applicationService.createApplication(application);

    }
    @PutMapping("/update/{id}")
    public Application updateApplication(@PathVariable int id,@RequestBody Application application){
        return applicationService.updateApplication(id, application);
    }
    @GetMapping("/get-application/id/{id}")
    public Application getApplicationById(@PathVariable int id){
        return applicationService.getApplicationById(id);
    }
    @GetMapping("/get-application/applicant/{name}")
    public List<Application> getApplicationByApplicant(@PathVariable String name){
        List<Application> applicationsByApplicant = new ArrayList<>();
        applicationsByApplicant = applicationService.searchByApplicantName(name);
        return applicationsByApplicant;
    }
    @GetMapping("/get-application/dog/{name}")
    public List<Application> getApplicationsByDog(@PathVariable String name){
        List<Application> applicationsByDog = new ArrayList<>();
        applicationsByDog = applicationService.searchByDogName(name);
        return applicationsByDog;
    }
    @GetMapping("/get-application/applicant-id/{id}")
    public List<Application> getApplicationsByApplicantId(@PathVariable int id){
        List<Application> applicationsByApplicantId = new ArrayList<>();
        applicationsByApplicantId = applicationService.searchByApplicantId(id);
        return applicationsByApplicantId;
    }
    @GetMapping("/all-application")
    public List<Application> getAllApplications(){
        return applicationService.getAllApplications();
    }
    @DeleteMapping("/delete/{id}")
    public void deleteApplication(@PathVariable int id){
        applicationService.deleteApplication(id);
    }

}
