import * as jwt from 'jsonwebtoken'

import { compareSync, genSaltSync, hashSync } from 'bcrypt'

import { UserDetails } from '../dbTypes'
import { logger } from './logger'

export const JWT_SECRET = process.env.JWT_SECRET
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN

export function hashPassword(password: string): string {
  const salt = genSaltSync(10)
  return hashSync(password, salt)
}
export const isPasswordValid = (password: string, hash: string): boolean =>
  compareSync(password, hash)

export const issueToken = (userDetails: UserDetails): string => {
  if (!JWT_SECRET) {
    throw new Error('No client secret provided in ENV.')
  }
  if (!JWT_EXPIRES_IN) {
    throw new Error('No client jwt expire date provided in ENV.')
  }
  return jwt.sign(userDetails, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  })
}

export const getCurrentUserByToken = (token: string | undefined) =>
  new Promise<UserDetails>((resolve, reject) => {
    if (!JWT_SECRET) {
      throw new Error('No client secret provided in ENV.')
    }
    if (!token) {
      throw new Error('No token provided')
    }
    try {
      // eslint-disable-next-line prettier/prettier
      jwt.verify(token, JWT_SECRET, function (err, decoded) {
        if (err) {
          logger.error(err)
          return reject(`Authorization headers not decoded ${err}`)
        } else if (typeof decoded === 'string') {
          logger.error(decoded)
          return reject(`Authorization headers decoded as string ${decoded}`)
        }

        const userAuth = decoded as UserDetails
        logger.info(`User authenticated: ${userAuth.id}`)
        resolve(userAuth)
      })
    } catch (err) {
      reject(err)
    }
  })
