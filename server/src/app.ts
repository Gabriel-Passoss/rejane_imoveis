import fastify from 'fastify'

import { propertiesRoutes } from './routes/properties'
import { citiesRoutes } from './routes/cities'

export const app = fastify()

app.register(propertiesRoutes)
app.register(citiesRoutes)