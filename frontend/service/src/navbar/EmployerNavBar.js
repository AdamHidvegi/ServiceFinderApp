import React from 'react';
import {ArrowRightIcon} from '@primer/octicons-react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ReactTooltip from "react-tooltip";
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function EmployerNavBar() {

  return(
    <div>
    <Navbar bg="dark" variant="dark justify-content-between">
      <Navbar.Brand href="/">@YourService</Navbar.Brand>
      <Nav variant="pills" className="justify-content-start" defaultActiveKey="/">
        <Nav.Link href="/employers/post-a-job">Post a job</Nav.Link>
        <Nav.Link href="/employers/how-it-works">How it works?</Nav.Link>
        <Nav.Link href="/employers/about">About</Nav.Link>
        <div className="justify-content-end">
          <Button href="/employees" variant="secondary mx-1" data-tip data-for="switchToEmployee" type="button">I'd like to find a job!</Button>
          <Button variant="secondary mx-1" type="button">Sign up</Button>
          <Button variant="secondary mx-1" type="button">Log in <ArrowRightIcon size={16} /></Button>
        </div>
      </Nav>
    </Navbar>
    <ReactTooltip id="switchToEmployee" place="bottom" effect="solid">
    Switch to 'Employee-mode'.
    </ReactTooltip>
    </div>
  )

}
