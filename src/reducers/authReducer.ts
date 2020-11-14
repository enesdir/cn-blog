export enum AuthActionsType {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  SIGN_OUT = 'SIGN_OUT',
}

export interface AuthState {
  token: string
  name?: string | null
  authed: boolean
}

export interface AuthReducerAction {
  type: AuthActionsType
  payload?: AuthState
}

export function reducer(state: AuthState, action: AuthReducerAction) {
  switch (action.type) {
    case AuthActionsType.SIGN_IN:
      return { ...action.payload }
    case AuthActionsType.SIGN_UP:
      return { ...action.payload }
    case AuthActionsType.SIGN_OUT:
      return { token: null, authed: false, name: null }
    default:
      throw new Error()
  }
}
