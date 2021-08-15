import { IS_PROD, TOKEN_KEY } from './constants'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

import { NextPageContext } from 'next'
import isJWT from 'validator/lib/isJWT'

export function checkToken(token: string): boolean {
  // JS Null check
  // https://stackoverflow.com/questions/16672743/javascript-null-check
  if (token !== undefined && token !== 'undefined') {
    return isJWT(token)
  }
  return false
}
export function getToken(ctx?: NextPageContext) {
  const cookies = parseCookies(ctx)
  return cookies[TOKEN_KEY]
}

export const MAX_AGE = 60 * 60 * 8 // 8 hours

export const setToken = (token: string) => {
  setCookie(null, TOKEN_KEY, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    path: '/',
    sameSite: 'lax',
    secure: IS_PROD,
  })
}

export const removeToken = () => {
  destroyCookie(null, TOKEN_KEY, {
    maxAge: -1,
    path: '/',
  })
}
