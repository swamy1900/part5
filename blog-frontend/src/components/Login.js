import React from 'react'
const Login = ({ handleLogin, username, password }) => {
  return (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input {...username.attributes} />
      </div>
      <div>
        password
        <input {...password.attributes} />
      </div>
      <button type="submit">login</button>
    </form>
  )
}

export default Login