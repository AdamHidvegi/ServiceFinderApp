package com.example.service.controllers;

import com.example.service.models.Employee;
import com.example.service.repositories.job.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/jobs")
public class JobController {

    @Autowired
    JobRepo jobRepo;

    @GetMapping(value = "/{id}/applicants")
    public List<Employee> getEmployeesById(@PathVariable Long id) {
        return jobRepo.getEmployeesById(id);
    }

}
