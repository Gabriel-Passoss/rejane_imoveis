import { FastifyInstance } from "fastify";

export async function propertiesRoutes(app: FastifyInstance) {
  // Lista todos os imóveis
  app.get('/properties', async (request, reply) => {

  })

  //Lista um imóvel específico
  app.get('/properties/:id', async (request,reply) => {

  })

  // Cria um imóvel 
  app.post('/properties', async (request, reply) => {
    
  })
}