import React from 'react';

export default function SignUpForm() {

  return (
    <div>
      <h2>Sign up</h2>
      <form>
        <input type="text" placeholder="First name"/>
        <input type="text" placeholder="Last name"/>
        <input type="email" placeholder="E-mail"/>
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Confirm password"/>
        <button type="submit">Sign up</button>
      </form>
    </div>
  )

}
