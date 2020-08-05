import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EmployeeContainer from './employees/EmployeeContainer';
import EmployerContainer from './employers/EmployerContainer';
import JobContainer from './jobs/JobContainer';
import LoginContainer from './login/LoginContainer';
import SignUpContainer from './login/SignUpContainer';
import JobCreatingFormContainer from './jobs/JobCreatingFormContainer';
import AboutContainer from './employees/AboutContainer';
import HowItWorksContainer from './employees/HowItWorksContainer';
import NavBar from '../navbar/NavBar';
import HomeContainer from './home/HomeContainer';
import Home from '../components/home/Home';
import Container from 'react-bootstrap/Container'

export default function MainContainer() {

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

  function findEmployeeById() {
    const employee = employees.find((employee) => {
      return employee.id === parseInt(id);
    })
    return employee;
  }

  return(
    <Container fluid>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/employees">
              <EmployeeContainer/>
            </Route>
            <Route exact path="/employees/search-for-job">
              <JobContainer/>
            </Route>
            <Route exact path="/employers/post-a-job">
              <JobCreatingFormContainer/>
            </Route>
            <Route exact path="/employees/how-it-works">
              <HowItWorksContainer/>
            </Route>
            <Route exact path="/employees/about">
              <AboutContainer/>
            </Route>
            <Route exact path="/employees/login">
              <LoginContainer/>
            </Route>
            <Route exact path="/employees/sign-up">
              <SignUpContainer/>
            </Route>
            <Route exact path="/employers">
              <EmployerContainer/>
            </Route>
          </Switch>
        </Fragment>
      </Router>
    </Container>
  )
}
