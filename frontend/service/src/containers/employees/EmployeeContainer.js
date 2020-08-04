import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EmployeeList from '../../components/employees/EmployeeList';
import NavBar from '../../navbar/NavBar';
import EmployeeNavBar from '../../navbar/EmployeeNavBar';
// import HowItWorksContainer from './HowItWorksContainer';
import Container from 'react-bootstrap/Container'

export default function EmployeeContainer() {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const getEmployees = () => {
      fetch('/api/employees')
      .then(res => res.json())
      .then(data => setEmployees(data._embedded.employees));
    };
    getEmployees();
  });

  return(
    <div>
      <EmployeeNavBar/>
      <EmployeeList employees={employees}/>
    </div>
  )

}
