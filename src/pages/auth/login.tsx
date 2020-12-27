import BasicLayout from '@app/components/layouts/Basic'
import LoginForm from '@app/components/auth/LoginForm'
import React from 'react'

function LoginPage() {
  return (
    <BasicLayout title="Login Blog App">
      <LoginForm />
    </BasicLayout>
  )
}

export default LoginPage
