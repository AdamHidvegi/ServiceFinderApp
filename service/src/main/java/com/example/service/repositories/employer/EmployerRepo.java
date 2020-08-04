package com.example.service.repositories.employer;

import com.example.service.models.Employer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface EmployerRepo extends JpaRepository<Employer, Long>, EmployerRepoCustom {
}
