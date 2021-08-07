import { NextApiRequest, NextApiResponse, PageConfig } from 'next'

import Cors from 'cors'
import { createServer } from '../../../server/createServer'
import initMiddleware from '../../../server/utils/initMiddleware'
import { withSentry } from '@sentry/nextjs'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}

async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  await cors(req, res)
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', 'https://studio.apollographql.com')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  if (req.method === 'OPTIONS') {
    res.end()
    return
  }
  const apolloServerHandler = await createServer({
    path: '/api/graphql',
  })
  return apolloServerHandler(req, res)
}

export default withSentry(handler)
