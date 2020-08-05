import React from 'react';

export default function LoginForm({handleLogin}) {

  function handleSubmit(event) {
    event.preventDefault();
    const login_data = {
      "email": event.target.email.value,
      "password": event.target.password.value
    }
    handleLogin(login_data);
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="E-mail"/>
        <input type="text" name="password" placeholder="Password"/>
        <button type="submit" value="submit">Login</button>
      </form>
    </div>
  )

}
