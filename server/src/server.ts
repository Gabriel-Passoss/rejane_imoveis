import fastify from 'fastify'

import { propertiesRoutes } from './routes/properties'

const app = fastify()

app.register(propertiesRoutes)

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP Server is running')
})