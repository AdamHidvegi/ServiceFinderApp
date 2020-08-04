import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../../components/home/Home';
import EmployeeContainer from '../employees/EmployeeContainer';
import EmployerContainer from '../employers/EmployerContainer';
import JobContainer from '../jobs/JobContainer';

export default function HomeContainer() {

  return(
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
          <Route exact path="/employers">
            <EmployerContainer/>
          </Route>
        </Switch>
      </Fragment>
    </Router>
  )

}
