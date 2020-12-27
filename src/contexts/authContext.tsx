import { AuthActionsType, AuthReducerAction, AuthState, reducer } from '@app/reducers/authReducer'
import React, { useContext, useEffect, useReducer } from 'react'
import { checkToken, removeToken, setToken } from '@app/utils/tokenHelper'

import Router from 'next/router'
import jwt from 'jwt-decode'

// NOTE:
// We would pass down signIn and signOut to <Login /> & <Register />

interface AuthProviderProps {
  children: React.ReactNode
  token: string
  authed: boolean
}

interface AuthActions {
  signIn: (token: string) => void
  signUp: (token: string) => void
  signOut: () => void
}

type AuthContextType = [AuthState, AuthActions]

interface TokenProps {
  name: string
  user: string
}

const EMPTY_USER: TokenProps = {
  user: null,
  name: null,
}

const AuthContext = React.createContext<AuthContextType>([null, null] as AuthContextType)

function initializer(tokenInitial?: string): AuthState {
  const token = tokenInitial
  const { name } = checkToken(token) ? jwt<TokenProps>(token) : EMPTY_USER
  return {
    token,
    authed: checkToken(token),
    name: name || null,
  }
}

function useAuthReducer(tokenInitial?: string): [AuthState, AuthActions] {
  const [state, dispatch] = useReducer<React.Reducer<AuthState, AuthReducerAction>, string>(
    reducer,
    tokenInitial,
    initializer
  )

  function signUp(token: string) {
    const { name } = jwt<TokenProps>(token)

    dispatch({
      type: AuthActionsType.SIGN_IN,
      payload: {
        token,
        authed: true,
        name,
      },
    })
  }

  function signIn(token: string) {
    const { name } = jwt<TokenProps>(token)

    dispatch({
      type: AuthActionsType.SIGN_IN,
      payload: {
        token,
        authed: true,
        name,
      },
    })
  }

  function signOut() {
    dispatch({ type: AuthActionsType.SIGN_OUT })
  }

  return [state, { signIn, signUp, signOut }]
}

function useAuthSideEffects(state: AuthState): void {
  // FIXME: getting loop different lang
  // see: https://github.com/isaachinman/next-i18next/issues/413
  useEffect(() => {
    if (
      state.authed &&
      (Router.pathname === '/auth/login' || Router.pathname === '/auth/register')
    ) {
      Router.push({ pathname: '/' })
    }
    if (!state.authed && Router.pathname === '/portal') {
      Router.push({ pathname: '/auth/login' })
      removeToken()
    }
  }, [state.authed])

  useEffect(() => {
    if (state.token) {
      setToken(state.token)
    }
  }, [state.token])
}

// Should be able to just request user details from another call
export function AuthProvider({ token, children }: AuthProviderProps) {
  const [state, { signIn, signUp, signOut }] = useAuthReducer(token)

  useAuthSideEffects(state)

  function getAuthContext(): AuthContextType {
    return [
      state,
      {
        signIn,
        signUp,
        signOut,
      },
    ]
  }
  // FIXME: eslint react hooks error
  const value = React.useMemo<AuthContextType>(() => getAuthContext(), [state.token, state.authed])

  return React.createElement(AuthContext.Provider, { value }, children)
}

const useAuthContext = () => {
  const context = useContext<AuthContextType>(AuthContext)
  if (context === undefined) {
    throw new Error('App context not defined while accessing it')
  }

  return context
}

// Use AuthContext state
export const useAuthState = () => useAuthContext()[0]

// Use AuthContext dispatch
export const useAuthDispatch = () => useAuthContext()[1]
