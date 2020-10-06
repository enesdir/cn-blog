import BasicLayout from '@app/components/layouts/Basic'
import React from 'react'
import RegisterForm from '@app/components/auth/RegisterForm'
import { useTranslation } from '@app/utils/i18next'

function RegisterPage() {
  const { t } = useTranslation('common')
  return (
    <BasicLayout title={t('title.register')}>
      <RegisterForm />
    </BasicLayout>
  )
}

RegisterPage.defaultProps = {
  i18nNamespaces: ['common'],
}
export default RegisterPage
