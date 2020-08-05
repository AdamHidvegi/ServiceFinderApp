import React, {useState, useEffect} from 'react';
import LoginForm from '../../components/login/LoginForm';
import EmployeeNavBar from '../../navbar/EmployeeNavBar';

export default function LoginContainer() {

  const [employees, setEmployees] = useState([])
  const [employers, setEmployers] = useState([])

  useEffect(() => {
    const getEmployees = () => {
      fetch('/api/employees')
      .then(res => res.json())
      .then(data => setEmployees(data._embedded.employees))
    };
    const getEmployers = () => {
      fetch('/api/employers')
      .then(res => res.json())
      .then(data => setEmployers(data._embedded.employers))
    };
    getEmployees();
    getEmployers();
  }, []);

  function handleLogin(login_data) {
    let employee;
    let employer;
    for (employee of employees) {
      if (employee.email === login_data.email && employee.password === login_data.password) {
        window.location = '/employees'
      }
      else if (employee.email !== login_data.email || employee.password !== login_data.password) {
        console.log("you are not an employee.");
      }
    };
    for (employer of employers) {
      if (employer.email === login_data.email && employer.password === login_data.password) {
        window.location = "/employers"
      }
      else if (employer.email !== login_data.email || employer.password !== login_data.password) {
        console.log("you are not an employer.");
      }
    }
    console.log("I got you!");
  }

  return (
    <div>
      <EmployeeNavBar/>
      <LoginForm handleLogin={handleLogin}/>
    </div>
  )

}
