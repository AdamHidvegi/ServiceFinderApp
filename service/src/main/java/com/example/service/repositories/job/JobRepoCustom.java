package com.example.service.repositories.job;

import com.example.service.models.Employee;

import java.util.List;

public interface JobRepoCustom {
    List<Employee> getEmployeesById(Long employee_id);
}
