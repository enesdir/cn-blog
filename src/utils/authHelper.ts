import { getToken, removeToken, setToken } from './tokenHelper'

import { NextPageContext } from 'next'
import Router from 'next/router'

export const login = ({ token }: { token: string }) => {
  setToken(token)
  const next = Router.query.next
  if (next) {
    Router.push(next as string)
  } else {
    Router.push('/')
  }
}

export const authToken = (ctx: NextPageContext) => {
  const token = getToken(ctx)
  const next = ctx.pathname
  const url = next ? `/login?next=${next}` : '/login'
  // If there's no token, it means the user is not logged in.
  if (!token) {
    if (typeof window === 'undefined') {
      ctx.res?.writeHead(302, { Location: url })
      ctx.res?.end()
    } else {
      Router.push(url)
    }
  }

  return token
}

export const logout = () => {
  removeToken()
  Router.push('/login')
}
