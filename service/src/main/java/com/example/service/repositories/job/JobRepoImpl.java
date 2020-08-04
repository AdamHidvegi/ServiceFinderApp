package com.example.service.repositories.job;

import com.example.service.models.Employee;
import com.example.service.models.Job;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class JobRepoImpl implements JobRepoCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Employee> getEmployeesById(Long employee_id) {
        List<Employee> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Job.class);
            cr.createAlias("employee", "employeeAlias");
            cr.add(Restrictions.eq("employeeAlias.Id", employee_id));
            results = cr.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return results;
    }

}
