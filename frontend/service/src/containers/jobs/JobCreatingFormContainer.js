import React from 'react';
import Request from '../../helpers/request';
import JobCreatingForm from '../../components/jobs/JobCreatingForm';

export default function JobCreatingFormContainer() {

  function handleJobPost(job) {
    const request = new Request();
    const jobs_url = '/api/jobs';
    request.post(jobs_url, job)
    .then(() => {
      window.location = '/employees/search-for-job'
    })
  }

  return(
    <JobCreatingForm handleJobPost = {handleJobPost}/>
  )

}
