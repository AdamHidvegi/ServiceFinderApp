import React from 'react';

export default function LoginForm() {

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="E-mail"/>
        <input type="text" placeholder="Password"/>
        <button type="submit">Login</button>
      </form>
    </div>
  )

}
