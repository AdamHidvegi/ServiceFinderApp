package com.example.service.repositories.employer;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;

public class EmployerRepoImpl implements EmployerRepoCustom {

    @Autowired
    EntityManager entityManager;

}
