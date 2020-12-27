import BasicLayout from '@app/components/layouts/Basic'
import React from 'react'
import RegisterForm from '@app/components/auth/RegisterForm'

function RegisterPage() {
  return (
    <BasicLayout title="Register My Blog App">
      <RegisterForm />
    </BasicLayout>
  )
}

export default RegisterPage
