import React from 'react';
import Request from '../../helpers/request';
import SignUpForm from '../../components/login/SignUpForm';
import EmployeeNavBar from '../../navbar/EmployeeNavBar';

export default function SignInContainer() {

  function handleSignUp(user) {
    const request = new Request();
    const users_url = '/api/employees';
    request.post(users_url, user)
    .then(() => {
      window.location = '/employees'
    })
  }

  return (
    <div>
      <EmployeeNavBar/>
      <SignUpForm handleSignUp={handleSignUp}/>
    </div>
  )

}
