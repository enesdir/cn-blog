import BasicLayout from '@app/components/layouts/Basic'
import LoginForm from '@app/components/auth/LoginForm'
import React from 'react'
import { useTranslation } from '@app/utils/i18next'

function LoginPage() {
  const { t } = useTranslation('common')
  return (
    <BasicLayout title={t('title.login')}>
      <LoginForm />
    </BasicLayout>
  )
}

LoginPage.defaultProps = {
  i18nNamespaces: ['common'],
}
export default LoginPage
