import React, {useState, useEffect} from 'react';

const EmployeeList = ({employees}) => {

  const employeeDetail = employees.map((data, index) => {
    return(
      <div key={index}>
        Name: {data.first_name} {data.last_name}
      </div>
    )
  })

  return(
    <div>
      <p>Employees:</p>
        {employeeDetail}
    </div>
  )

}

export default EmployeeList;
