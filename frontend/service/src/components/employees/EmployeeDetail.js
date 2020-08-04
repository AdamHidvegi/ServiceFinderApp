import React from 'react';

const EmployeeDetail = ({first_name, last_name}) => {
  return(
    <div>
      <p>Name: {first_name} {last_name}</p>
    </div>
  )
};

export default EmployeeDetail;
