import { Paper, Typography } from '@material-ui/core'

import Layout from '@app/components/layouts/Portal'
import Link from 'next/link'
import React from 'react'
import { getUsersQuery } from '@graphql/user/getUsers'
import { useAuthState } from '@app/contexts/authContext'
import { useQuery } from '@apollo/client'
import { useTranslation } from '@app/utils/i18next'

const User = ({ user }) => (
  <Link href="/p/[id]" as={`/p/${user.id}`}>
    <a>
      <h2>{user.name + ' ' + user.surname}</h2>
      <p>{JSON.stringify(user)}</p>
    </a>
  </Link>
)

const PortalPage = () => {
  const { loading, error, data } = useQuery(getUsersQuery)
  const { t } = useTranslation('common')
  const { authed } = useAuthState()

  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <Layout title={t('title.portal')}>
      <div className="page">
        <h1>My Blog</h1>
        <main>
          {!authed ? (
            <Paper style={{ padding: 20, marginBottom: 20 }}>
              <Typography style={{ marginBottom: 20 }} variant="h3">
                you are not logged in
              </Typography>
            </Paper>
          ) : (
            <Paper style={{ padding: 20, marginBottom: 20 }}>
              <Typography style={{ marginBottom: 20 }} variant="h3">
                you are logged in
              </Typography>
            </Paper>
          )}
          {data.users.map(user => (
            <Paper key={user.id} style={{ padding: 10, marginBottom: 10 }}>
              <User key={user.id} user={user} />
            </Paper>
          ))}
        </main>
      </div>
    </Layout>
  )
}

PortalPage.defaultProps = {
  i18nNamespaces: ['common'],
}

export default PortalPage
