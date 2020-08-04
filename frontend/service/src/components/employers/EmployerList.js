import React from 'react';

const EmployerList = ({employers}) => {

  const employerDetail = employers.map((data, index) => {
    return(
      <div key={index}>
        <p><b>Name: {data.first_name} {data.last_name}</b></p>
        <p>Location: {data.location}</p>
        <p>About you: {data.description}</p>
        <p>Skillset: {data.skillset}</p>
      </div>
    )
  })

  return(
    <div>
      <p>Employers:</p>
      {employerDetail}
    </div>
  )

}

export default EmployerList;
