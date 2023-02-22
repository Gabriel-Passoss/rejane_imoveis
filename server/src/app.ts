import fastify from 'fastify'

import { propertiesRoutes } from './routes/properties'

export const app = fastify()

app.register(propertiesRoutes)