import React from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../store/ducks/user'
import { useFormik } from 'formik'

const Login = () => {
  const dipatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      dipatch(loginUser(values))
    },
  })
  return (
    <div style={{ margin: '2em 0' }}>
      <form className="ui form" onSubmit={formik.handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
          />
        </div>
        <input className="ui secondary button" type="submit" value="Log In" />
      </form>
    </div>
  )
}

export default Login
