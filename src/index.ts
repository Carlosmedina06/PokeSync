import dotenv from 'dotenv'

import databaseConnect from '@/database'
import logger from '@/utils/helpers/logger'
import server from '@/server/server'

dotenv.config()

const port = process.env.PORT || 3000

const startServer = async () => {
  try {
    await databaseConnect()
    server.listen(port)
    logger.info(`⚡️[server]: Server is running at http://localhost:${port}`)
  } catch (err) {
    logger.error(`❌[server]: Unable to start the server: ${err}`)
  }
}

startServer()
