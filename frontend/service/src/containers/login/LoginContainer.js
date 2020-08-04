import React, {useState, useEffect} from 'react';
import LoginForm from '../../components/login/LoginForm';
import EmployeeNavBar from '../../navbar/EmployeeNavBar';

export default function LoginContainer() {

  return (
    <div>
      <EmployeeNavBar/>
      <LoginForm/>
    </div>
  )

}
