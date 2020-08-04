import React from 'react';

export default function NavBar() {

  return(
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light justify-content-between">
      <div className="navbar-nav" role="tablist">
        <a className="navbar-brand" href="/">@YourService</a>
        <a className="nav-item nav-link" href="/employees">Employees</a>
        <a className="nav-item nav-link" href="/employers">Employers</a>
        <a className="nav-item nav-link" href="/categories">Categories</a>
      </div>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search"/>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
  )

}
