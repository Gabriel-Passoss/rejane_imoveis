import { FastifyInstance } from "fastify";
import { PropertyRepository } from "../modules/Properties/repositories/propertyRepository";

export const propertyRepository = new PropertyRepository()

export async function citiesRoutes(app: FastifyInstance) {
  app.get('/cities', async (request, reply) => {
    const cities = await propertyRepository.listAllCities()

    reply.code(200).send(cities)
  })
}