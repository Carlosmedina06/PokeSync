import { Request, Response, NextFunction } from 'express'

const traceCapture = function (err: unknown, req: Request, res: Response, next: NextFunction) {
  let trace = req.header('x-request-id')

  if (!trace) {
    trace = crypto.randomUUID()
  }
  res.set({
    'x-request-id': `${trace}`,
  })
  req.headers['x-request-id'] = trace
  next()
}

export default traceCapture
