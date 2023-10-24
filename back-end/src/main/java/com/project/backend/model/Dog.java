package com.project.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

@Entity
@Table(name="dog")
public class Dog {
    @Id
    @GeneratedValue(generator = "custom-id", strategy = GenerationType.IDENTITY)
    @GenericGenerator(name = "custom-id", strategy = "com.project.backend.service.DogIdGenerator")
    private int id;
    private String name;
    private String displayImage;
    private String breed;
    @Temporal(TemporalType.DATE)
    private Date birthDate;
    private String age;
    private String gender;
    private String color;
    private String size;
    private String adoptionStatus; // Default value
    @Type(type = "text")
    private String description;
    @Temporal(TemporalType.DATE)
    private Date registeredDate;

    @OneToOne(mappedBy = "dog")
    @JsonIgnore
    private Application application;

    public Dog() {
    }

    public Dog(int id, String name, String displayImage, String breed, Date birthDate, String age, String gender, String color, String size, String adoptionStatus, String description, Date registeredDate, Application application) {
        this.id = id;
        this.name = name;
        this.displayImage = displayImage;
        this.breed = breed;
        this.birthDate = birthDate;
        this.age = age;
        this.gender = gender;
        this.color = color;
        this.size = size;
        this.adoptionStatus = adoptionStatus;
        this.description = description;
        this.registeredDate = registeredDate;
        this.application = application;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDisplayImage() {
        return displayImage;
    }

    public void setDisplayImage(String displayImage) {
        this.displayImage = displayImage;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getAge() {
        return age;
    }

    public void setAge(Date birthDate) {
        if (birthDate != null) {
            this.birthDate = birthDate;

            int computedAge = calculateAge(this.birthDate);
            this.age = String.valueOf(computedAge);
        }
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getAdoptionStatus() {
        return adoptionStatus;
    }

    public void setAdoptionStatus(String adoptionStatus) {
        this.adoptionStatus = adoptionStatus;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Application getApplication() {
        return application;
    }

    public void setApplication(Application application) {
        this.application = application;
    }

    public Date getRegisteredDate() {
        return registeredDate;
    }

    public void setRegisteredDate(Date registeredDate) {
        this.registeredDate = registeredDate;
    }

    private int calculateAge(Date birthDate) {
        Calendar birthCalendar = Calendar.getInstance();
        birthCalendar.setTime(birthDate);

        Calendar currentCalendar = Calendar.getInstance();

        int years = currentCalendar.get(Calendar.YEAR) - birthCalendar.get(Calendar.YEAR);
        int months = currentCalendar.get(Calendar.MONTH) - birthCalendar.get(Calendar.MONTH);

        if (currentCalendar.get(Calendar.DAY_OF_MONTH) < birthCalendar.get(Calendar.DAY_OF_MONTH)) {
            months--;
        }

        if (months < 0) {
            months += 12;
            years--;
        }

        return years * 12 + months;
    }
}
