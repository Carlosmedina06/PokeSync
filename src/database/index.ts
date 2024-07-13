import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

import logger from '@/utils/helpers/logger'

const databaseConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string)
    logger.info('⚡️[server]: Database connected')
  } catch (err) {
    logger.error(`❌[server]: Unable to connect to the database: ${err}`)
  }
}

export default databaseConnect
