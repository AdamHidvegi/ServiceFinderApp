package com.example.service.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long Id;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;

//    @Column(name = "location")
//    private String location;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @OneToMany(mappedBy = "employee", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = "employee")
    private List<Job> jobs;

    public Employee(String first_name, String last_name, String location, String email, String password) {
        this.first_name = first_name;
        this.last_name = last_name;
//        this.location = location;
        this.email = email;
        this.password = password;
    }

    public Employee() {
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

//    public String getLocation() {
//        return location;
//    }

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

//    public void setLocation(String location) {
//        this.location = location;
//    }

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
