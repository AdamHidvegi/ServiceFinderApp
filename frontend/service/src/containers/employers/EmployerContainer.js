import React, {useState, useEffect} from 'react';
import EmployerNavBar from '../../navbar/EmployerNavBar';
import EmployerList from '../../components/employers/EmployerList';

export default function EmployerContainer() {

  const [employers, setEmployers] = useState([])

  useEffect(() => {
    const getEmployers = () => {
      fetch('/api/employers')
      .then(res => res.json())
      .then(data => setEmployers(data._embedded.employers))
    };
    getEmployers();
  });

  return(
    <div>
      <EmployerNavBar/>
      <EmployerList employers={employers}/>
    </div>
  )

}
