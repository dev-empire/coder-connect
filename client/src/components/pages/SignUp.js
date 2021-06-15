import React from 'react'

const SignUp = () => {
  const [field, setFeild] = React.useState({
    name: '',
    email: '',
    password: '',
  })
  const handleSubmit = e => {
    e.preventDefault()
  }

  const { email, name, password } = field

  const handleChange = e => {
    setField({ ...field, [e.target.name]: e.target.value })
  }
  return (
    <div style={{ margin: '2em 0' }}>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <input
          className="ui secondary button"
          onClick={handleSubmit}
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  )
}

export default SignUp
