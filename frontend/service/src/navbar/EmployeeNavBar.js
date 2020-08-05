import React, {useState, useEffect} from 'react';
import {ArrowRightIcon} from '@primer/octicons-react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactTooltip from "react-tooltip";
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function EmployeeNavBar() {

  const [status, setStatus] = useState(false)
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
    checkStatus();
  }, []);

  function checkStatus() {
    let employee;
    let employer;
    for (employee of employees) {
      if (employee.status === "logged in") {
        setStatus(true);
      }
    };
    for (employer of employers) {
      if (employer.status === "logged in") {
        setStatus(true);
      }
    }
    // return status;
  }

  return(
    <div>
      <Navbar bg="dark" variant="dark justify-content-between">
        <Navbar.Brand href="/">@YourService</Navbar.Brand>
        <Nav variant="pills" className="justify-content-start" defaultActiveKey="/">
        {status ? (
          <Nav.Link href="/employees/search-for-job">My profile</Nav.Link>
        ) : (
          <Nav.Link style={{display:'none'}} href="/employees/search-for-job">My profile</Nav.Link>
        )}
          <Nav.Link href="/employees/search-for-job">Search for job</Nav.Link>
          <Nav.Link href="/employees/how-it-works">How it works?</Nav.Link>
          <Nav.Link href="/employees/about">About</Nav.Link>
          <div className="justify-content-end">
            <Button href="/employers" variant="secondary mx-1" data-tip data-for="switchToEmployer" type="button">I'd like to post a job!</Button>
            <Button href="/employees/sign-up" variant="secondary mx-1" type="button">Sign up</Button>
            {!status ? (
              <Button href="/employees/login" variant="secondary mx-1" type="button">Log in <ArrowRightIcon size={16} /></Button>
            ) : (
              <Button href="/employees/logout" variant="secondary mx-1" type="button">Log out <ArrowRightIcon size={16} /></Button>
            )}
          </div>
        </Nav>
      </Navbar>
      <ReactTooltip id="switchToEmployer" place="bottom" effect="solid">
      Switch to 'Employer-mode'.
      </ReactTooltip>
    </div>
  )

}
