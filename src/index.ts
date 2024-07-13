import dotenv from 'dotenv'

import logger from '@/utils/helpers/logger'
import server from '@/server/server'

dotenv.config()

const port = process.env.PORT

const startServer = async () => {
  try {
    server.listen(port)
    logger.info(`⚡️[server]: Server is running at http://localhost:${port}`)
  } catch (err) {
    logger.error(`❌[server]: Unable to start the server: ${err}`)
  }
}

startServer()
