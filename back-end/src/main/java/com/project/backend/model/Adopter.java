package com.project.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="adopter")
public class Adopter {
    @Id
    @GeneratedValue(generator = "custom-id", strategy = GenerationType.IDENTITY)
    @GenericGenerator(name = "custom-id", strategy = "com.project.backend.service.AdopterIdGenerator")
    private int id;
    private String firstName;
    private String lastName;
    private String fullName;
    private String displayImage; // image address path
    private String email;
    private String password;
    private String phoneNumber;
    private String homeAddress;
    @Temporal(TemporalType.DATE)
    private Date registeredDate;

    @OneToMany(mappedBy = "applicant")
    @JsonIgnore
    private List<Application> applications;

    public Adopter(int id, String firstName, String lastName, String fullName, String displayImage, String email, String password, String phoneNumber, String homeAddress, Date registeredDate, List<Application> applications) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.displayImage = displayImage;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.homeAddress = homeAddress;
        this.registeredDate = registeredDate;
        this.applications = applications;
    }

    public Adopter() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName() {
        this.fullName = this.getFirstName() + " " + this.getLastName();
    }

    public String getDisplayImage() {
        return displayImage;
    }

    public void setDisplayImage(String displayImage) {
        this.displayImage = displayImage;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getHomeAddress() {
        return homeAddress;
    }

    public void setHomeAddress(String homeAddress) {
        this.homeAddress = homeAddress;
    }

    public Date getRegisteredDate() {
        return registeredDate;
    }

    public void setRegisteredDate(Date registeredDate) {
        this.registeredDate = registeredDate;
    }

    public List<Application> getApplications() {
        return applications;
    }

    public void setApplications(List<Application> applications) {
        this.applications = applications;
    }
}
