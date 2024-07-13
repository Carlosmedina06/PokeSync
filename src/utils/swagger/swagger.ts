const swaggerAutogen = require('swagger-autogen') //eslint-disable-line

const doc = {
  info: {
    title: 'PokéSync API',
    description: 'API RESTful de PokéSync',
  },
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'authorization',
      in: 'header',
      description: 'Token JWT de autorizacion',
    },
  },
  security: [{ bearerAuth: [] }],
  schemes: ['https', 'http'],
  basePath: '/api',
  host: null,
}

const outputFile = 'src/utils/swagger/swagger-output.json'
const endpointsFiles = ['./src/routes/index.ts']

swaggerAutogen()(outputFile, endpointsFiles, doc)
