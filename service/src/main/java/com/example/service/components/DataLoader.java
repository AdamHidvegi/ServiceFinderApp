package com.example.service.components;

import com.example.service.models.Employee;
import com.example.service.models.Employer;
import com.example.service.models.Job;
import com.example.service.repositories.employee.EmployeeRepo;
import com.example.service.repositories.employer.EmployerRepo;
import com.example.service.repositories.job.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    EmployeeRepo employeeRepo;

    @Autowired
    EmployerRepo employerRepo;

    @Autowired
    JobRepo jobRepo;

    public DataLoader(){

    }

    public void run(ApplicationArguments args) {
        // employee:

        Employee employee1 = new Employee("Adam", "Hidvegi", "Glasgow", "hidvegiadam@gmail.com", "12345", "logged out");
        employeeRepo.save(employee1);

        Employee employee2 = new Employee("Zoltan", "Rosta", "Budapest", "zoltanrosta@gmail.com", "1234", "logged out");
        employeeRepo.save(employee2);

        //employer:

        Employer employer1 = new Employer("Kincso", "Turai", "description", "skillset", "Glasgow", 5, "08/08/2020", "kincsoet@gmail.com", "1234", "logged out");
        employerRepo.save(employer1);

        // job:

        Job job1 = new Job("software developer", "Glasgow", "description", 10.00, 1, "development", employer1);
        jobRepo.save(job1);

        Job job2 = new Job("designer", "Coventry", "description", 10.00, 1, "design", employer1);
        jobRepo.save(job2);

        job1.addApplicants(employee1);
        jobRepo.save(job1);

        job2.addApplicants(employee2);
        jobRepo.save(job2);
    }

}
