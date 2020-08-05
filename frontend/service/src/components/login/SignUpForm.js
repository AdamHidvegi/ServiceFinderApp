import React from 'react';

const SignUpForm = ({handleSignUp}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      "first_name": event.target.first_name.value,
      "last_name": event.target.last_name.value,
      "email": event.target.email.value,
      "password": event.target.password.value
    }
    handleSignUp(user)
  }

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First name" name="first_name"/><br/>
        <input type="text" placeholder="Last name" name="last_name"/><br/>
        <input type="email" placeholder="E-mail" name="email"/><br/>
        <input type="password" placeholder="Password" name="password"/><br/>
        <input type="password" placeholder="Confirm password"/><br/>
        <button type="submit" value="submit">Sign up</button>
      </form>
    </div>
  )

}

export default SignUpForm;
