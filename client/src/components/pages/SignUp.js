import React from 'react'

const SignUp = () => {
  return (
    <div style={{ margin: '2em 0' }}>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={async ({ email, name, password }) => {
          console.log({ name, email, password })
          handleSubmit({
            email,
            name,
            password,
          })
        }}
      >
        <Form className="ui form">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input className="ui secondary button" type="submit" value="Submit" />
        </Form>
      </Formik>
    </div>
  )
}

export default SignUp
