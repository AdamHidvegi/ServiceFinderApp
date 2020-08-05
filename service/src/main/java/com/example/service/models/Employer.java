package com.example.service.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "employers")
public class Employer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long Id;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;

    @Column(name = "description")
    private String description;

    @Column(name = "skillset")
    private String skillset;

    @Column(name = "location")
    private String location;

    @Column(name = "rating")
    private double rating;

    @Column(name = "date")
    private String date;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "status")
    private String status;

    @OneToMany(mappedBy = "employer", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = "employer")
    private List<Job> jobs;

    public Employer(String first_name, String last_name, String description, String skillset, String location, double rating, String date, String email, String password, String status) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.description = description;
        this.skillset = skillset;
        this.location = location;
        this.rating = rating;
        this.date = date;
        this.email = email;
        this.password = password;
        this.status = status;
    }

    public Employer() {
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSkillset() {
        return skillset;
    }

    public void setSkillset(String skillset) {
        this.skillset = skillset;
    }

    public Long getId() {
        return Id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public List<Job> getJobs() {
        return jobs;
    }

    public void setId(Long id) {
        Id = id;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setJobs(List<Job> jobs) {
        this.jobs = jobs;
    }
}
