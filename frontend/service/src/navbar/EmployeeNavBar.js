import React from 'react';
import {ArrowRightIcon} from '@primer/octicons-react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactTooltip from "react-tooltip";
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function EmployeeNavBar() {

  return(
    <div>
      <Navbar bg="dark" variant="dark justify-content-between">
        <Navbar.Brand href="/">@YourService</Navbar.Brand>
        <Nav variant="pills" className="justify-content-start" defaultActiveKey="/">
          <Nav.Link href="/employees/search-for-job">Search for job</Nav.Link>
          <Nav.Link href="/employees/how-it-works">How it works?</Nav.Link>
          <Nav.Link href="/employees/about">About</Nav.Link>
          <div className="justify-content-end">
            <Button href="/employers" variant="secondary mx-1" data-tip data-for="switchToEmployer" type="button">I'd like to post a job!</Button>
            <Button variant="secondary mx-1" type="button">Sign up</Button>
            <Button variant="secondary mx-1" type="button">Log in <ArrowRightIcon size={16} /></Button>
          </div>
        </Nav>
      </Navbar>
      <ReactTooltip id="switchToEmployer" place="bottom" effect="solid">
      Switch to 'Employer-mode'.
      </ReactTooltip>
    </div>
  )

}
