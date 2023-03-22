import fastify from 'fastify'
import cors from '@fastify/cors'

import { propertiesRoutes } from './routes/properties'
import { citiesRoutes } from './routes/cities'

export const app = fastify()

app.register(cors, {
  origin: '*'
});

app.register(propertiesRoutes)
app.register(citiesRoutes)