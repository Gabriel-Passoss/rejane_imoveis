import fastify from 'fastify'
import cors from '@fastify/cors'
import multer from 'fastify-multer'

import { propertiesRoutes } from './routes/properties'
import { citiesRoutes } from './routes/cities'

export const app = fastify({
  logger: true
})

app.register(cors, {
  origin: '*'
});

app.register(multer.contentParser)
app.register(propertiesRoutes)
app.register(citiesRoutes)