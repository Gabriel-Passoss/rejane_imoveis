import { FastifyInstance } from "fastify";
import { z } from "zod";

import { CreatePropertyService } from "../modules/Properties/services/createPropertyService";
import { PropertyRepository } from "../modules/Properties/repositories/propertyRepository";

const propertyRepository = new PropertyRepository()
const createPropertyService = new CreatePropertyService(propertyRepository)

const imageSchema = z.object({
  url: z.string()
})

const characteristicsSchema = z.object({
  rooms: z.number(),
  car: z.number(),
  bathrooms: z.number(),
  suites: z.number(),
  kitchens: z.number(),
  total_area: z.number(),
  private_area: z.number(),
  infrastructure: z.array(z.string())
})

const propertySchema = z.object({
  title: z.string(),
  price_sell: z.number().optional(),
  price_rent: z.number().optional(),
  price_season: z.number().optional(),
  iptu: z.number().optional(),
  condominium: z.number().optional(),
  typeOfBusiness: z.enum(['RENT', 'SELL', 'SEASON']),
  images: imageSchema,
  characteristics: characteristicsSchema,
  street: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
  description: z.string()
})

export async function propertiesRoutes(app: FastifyInstance) {
  // Lista todos os imóveis
  app.get('/properties', async () => {
    const properties = await propertyRepository.listAll()
    return properties
  })

  //Lista um imóvel específico
  app.get('/properties/:id', async (request,reply) => {

  })

  // Cria um imóvel 
  app.post('/properties', async (request, reply) => {
    const body = propertySchema.parse(request.body)
    const property = await createPropertyService.execute(body)
    return property
  })
}