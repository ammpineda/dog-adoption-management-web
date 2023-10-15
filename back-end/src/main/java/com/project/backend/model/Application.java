package com.project.backend.model;

import javax.persistence.*;
import java.util.Date;
@Entity
@Table(name="application")
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String status;
    @Temporal(TemporalType.DATE)
    private Date submittedDate;
    @Temporal(TemporalType.DATE)
    private Date reviewDate;
    @Temporal(TemporalType.DATE)
    private Date approvalDate;

    @ManyToOne
    @JoinColumn(name = "applicant_id")
    private Adopter applicant;

    @ManyToOne
    @JoinColumn(name = "dog_id")
    private Dog dog;

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

    public Date getSubmittedDate() {
        return submittedDate;
    }

    public void setSubmittedDate(Date submittedDate) {
        this.submittedDate = submittedDate;
    }

    public Date getReviewDate() {
        return reviewDate;
    }

    public void setReviewDate(Date reviewDate) {
        this.reviewDate = reviewDate;
    }

    public Date getApprovalDate() {
        return approvalDate;
    }

    public void setApprovalDate(Date approvalDate) {
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
