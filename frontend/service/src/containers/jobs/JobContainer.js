import React, {useState, useEffect} from 'react';
import JobList from '../../components/jobs/JobList';
import EmployeeNavBar from '../../navbar/EmployeeNavBar';

export default function JobContainer() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const getJobs = () => {
      fetch('/api/jobs')
      .then(res => res.json())
      .then(data => setJobs(data._embedded.jobs))
    };
    getJobs();
  })

  return(
    <div>
      <EmployeeNavBar/>
      <JobList jobs={jobs}/>
    </div>
  )

}
