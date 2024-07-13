interface CustomError extends Error {
  statusCode?: number
}

function customError(message: string, code?: number): CustomError {
  const error: CustomError = new Error(message)

  if (code !== undefined) {
    error.statusCode = code
  }

  return error
}

export default customError
