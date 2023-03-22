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
  property_type: z.string(),
  infrastructure: z.array(z.string())
})

const propertySchema = z.object({
  title: z.string(),
  createdBy: z.string(),
  price_sell: z.number().optional(),
  price_rent: z.number().optional(),
  price_season: z.number().optional(),
  iptu: z.number().optional(),
  condominium: z.number().optional(),
  typeOfBusiness: z.enum(['RENT', 'SELL', 'SEASON']),
  images: imageSchema.array(),
  characteristics: characteristicsSchema,
  street: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
  description: z.string()
})

const filterByCityAndBusinessSchema = z.object({
  typeOfBusiness: z.enum(['RENT', 'SELL', 'SEASON']),
  city: z.string()
})

const filterPropertiesSchema = z.object({
  typeOfBusiness: z.enum(['SELL', 'RENT', 'SEASON']),
  property_type: z.string(),
  city: z.string(),
  neighborhood: z.string(),
  rooms: z.string(),
  minValue: z.string(),
  maxValue: z.string()
})

export async function propertiesRoutes(app: FastifyInstance) {
  // Lista todos os imóveis
  app.get('/properties', async (request, reply) => {
    const properties = await propertyRepository.listAll()
    return reply.status(200).send(properties)
  })

  //Lista um imóvel específico
  app.get('/properties/:id', async (request,reply) => {
    //@ts-ignore
    const property = await propertyRepository.findByID(request.params.id)
    return reply.code(200).send(property)
  })

  // Cria um imóvel 
  app.post('/properties', async (request, reply) => {
    const body = propertySchema.parse(request.body)
    const property = await createPropertyService.execute(body)

    return reply.status(201).send(property)
  })
  
  // Filtra por cidade e tipo de negócio
  app.post('/filter/by-city-and-business', async (request, reply) => {
    const { typeOfBusiness, city } = filterByCityAndBusinessSchema.parse(request.body)
    const properties = await propertyRepository.filterByCityAndBusiness(typeOfBusiness, city)

    return reply.status(200).send(properties)
  })

  // Filtra os imóveis por características
  app.post('/filter/properties', async (request, reply) => {
    const body = filterPropertiesSchema.parse(request.body)
    const properties = await propertyRepository.filterProperties(body)

    return reply.status(200).send(properties)
  })
}