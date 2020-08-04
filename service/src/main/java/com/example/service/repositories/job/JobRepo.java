package com.example.service.repositories.job;

import com.example.service.models.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface JobRepo extends JpaRepository<Job, Long>, JobRepoCustom {
}
