import { createLogger, format, transports } from 'winston'

function Createlogger() {
  switch (process.env.NODE_ENV) {
    case 'development':
      return createLogger({
        level: 'debug',
        format: format.combine(
          format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
          }),
          format.colorize({ all: true }),
          format.errors({ stack: true }),
          format.splat(),
          format.json()
        ),
        defaultMeta: { service: 'cnblog-api' },
        transports: [
          new transports.Console({
            format: format.combine(format.colorize(), format.simple()),
          }),
        ],
      })
    case 'production':
    /* follow through */
    /* eslint-disable */
    default:
      return createLogger({
        level: 'info',
        format: format.prettyPrint(),
        defaultMeta: { service: 'cnblog-api' },
        transports: [
          new transports.Console({
            format: format.simple(),
          }),
        ],
      })
  }
}
export const logger = Createlogger()
