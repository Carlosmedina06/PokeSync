declare global {
  namespace Express {
    interface Request {}
  }
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string
      API_KEY: string
      DATABASE_URL: string
      NODE_ENV: 'development' | 'production' | 'staging' | 'test'
    }
  }
}
export {}
