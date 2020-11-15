import Cors from 'micro-cors'
import { PageConfig } from 'next'
import { createServer } from '../../../server/createServer'

const cors = Cors({
  allowMethods: ['POST', 'OPTIONS'],
})

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}

const handler = createServer({ path: '/api/graphql' })

export default cors(handler)
