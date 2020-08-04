package com.example.service.controllers;

import com.example.service.repositories.employer.EmployerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/employers")
public class EmployerController {

    @Autowired
    EmployerRepo employerRepo;

}
