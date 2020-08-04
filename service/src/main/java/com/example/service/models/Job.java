package com.example.service.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "jobs")
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long Id;

    @Column(name = "title")
    private String title;

    @Column(name = "location")
    private String location;

    @Column(name = "description")
    private String description;

    @Column(name = "salary")
    private Double salary;

    @Column(name = "duration")
    private Integer duration;

    @Column(name = "category")
    private String category;

    @ManyToOne
    @JsonIgnoreProperties(value = "jobs")
    @JoinColumn(name = "employer_id")
    private Employer employer;

    @ManyToOne
    @JsonIgnoreProperties(value = "jobs")
    @JoinColumn(name = "employee_id")
    private Employee employee;

    @ManyToMany
    @JsonIgnoreProperties(value = "jobs")
    @JoinTable(
            name = "applicants_jobs",
            joinColumns = {@JoinColumn(name = "job_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "employee_id", nullable = false, updatable = false)}
    )
    private List<Employee> applicants;

    public Job(String title, String location, String description, Double salary, Integer duration, String category, Employer employer){
        this.title = title;
        this.location = location;
        this.description = description;
        this.salary = salary;
        this.duration = duration;
        this.category = category;
        this.employer = employer;
        this.applicants = new ArrayList<Employee>();
    }

    public Job(){
    }


    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getTitle() {
        return title;
    }

    public String getLocation() {
        return location;
    }

    public String getDescription() {
        return description;
    }

    public Double getSalary() {
        return salary;
    }

    public Integer getDuration() {
        return duration;
    }

    public Employer getEmployer() {
        return employer;
    }

    public Employee getEmployee() {
        return employee;
    }

    public List<Employee> getApplicants() {
        return applicants;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public void setEmployer(Employer employer) {
        this.employer = employer;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public void setApplicants(List<Employee> applicants) {
        this.applicants = applicants;
    }

    public void addApplicants(Employee employee) {
        this.applicants.add(employee);
    }
}
