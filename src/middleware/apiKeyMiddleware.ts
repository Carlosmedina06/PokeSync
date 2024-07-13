import { NextFunction, Request, Response } from 'express'

import customError from '@/utils/helpers/customErrorHandler'

const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['api-key']
  const validApiKey = process.env.API_KEY

  if (apiKey !== validApiKey) {
    return next(customError('Invalid API Key', 401))
  }

  next()
}

export default apiKeyMiddleware
