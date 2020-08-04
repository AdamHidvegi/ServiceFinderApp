import React from 'react';

const JobList = ({jobs}) => {

  return(
    <div>
      <p>Available jobs:</p>
      {jobs.map((data,index) => {
        return(
          <div key={index} style={{marginBottom: "50px"}}>
            <p><b>Title: {data.title}</b></p>
            <p>Location: {data.location}</p>
            <p>Description: {data.description}</p>
            <p>Category: {data.category}</p>
          </div>
        )
      })}
    </div>
  )

}

export default JobList;
