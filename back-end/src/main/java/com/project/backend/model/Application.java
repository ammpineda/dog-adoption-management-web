package com.project.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
@Entity
@Table(name="application")
public class Application {
    @Id
    @GeneratedValue(generator = "custom-id", strategy = GenerationType.IDENTITY)
    @GenericGenerator(name = "custom-id", strategy = "com.project.backend.service.ApplicationIdGenerator")
    private int id;
    private String status;
    private LocalDateTime submittedDate;
    private LocalDateTime reviewDate;
    private LocalDateTime approvalDate;

    @ManyToOne
    @JoinColumn(name = "applicant_id")
    private Adopter applicant;

    @OneToOne
    @JoinColumn(name = "dog_id")
    private Dog dog;

    public Application() {
    }

    public Application(int id, String status, LocalDateTime submittedDate, LocalDateTime reviewDate, LocalDateTime approvalDate, Adopter applicant, Dog dog) {
        this.id = id;
        this.status = status;
        this.submittedDate = submittedDate;
        this.reviewDate = reviewDate;
        this.approvalDate = approvalDate;
        this.applicant = applicant;
        this.dog = dog;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getSubmittedDate() {
        return submittedDate;
    }

    public void setSubmittedDate(LocalDateTime submittedDate) {
        this.submittedDate = submittedDate;
    }

    public LocalDateTime getReviewDate() {
        return reviewDate;
    }

    public void setReviewDate(LocalDateTime reviewDate) {
        this.reviewDate = reviewDate;
    }

    public LocalDateTime getApprovalDate() {
        return approvalDate;
    }

    public void setApprovalDate(LocalDateTime approvalDate) {
        this.approvalDate = approvalDate;
    }

    public Adopter getApplicant() {
        return applicant;
    }

    public void setApplicant(Adopter applicant) {
        this.applicant = applicant;
    }

    public Dog getDog() {
        return dog;
    }

    public void setDog(Dog dog) {
        this.dog = dog;
    }
}
