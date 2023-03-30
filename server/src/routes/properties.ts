import { FastifyInstance } from "fastify";
import { z } from "zod";
import multer from 'fastify-multer'


import { CreatePropertyService } from "../modules/Properties/services/createPropertyService";
import { PropertyRepository } from "../modules/Properties/repositories/propertyRepository";

const propertyRepository = new PropertyRepository()
const createPropertyService = new CreatePropertyService(propertyRepository)
const storage = multer.memoryStorage()
const upload = multer({ storage })

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
  rooms: z.string(),
  minValue: z.string(),
  maxValue: z.string()
})

const idParamSchema = z.object({
  id: z.string()
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
  app.post('/properties', {preHandler: upload.any()},  async (request, reply) => {
    const images = request.files
    //@ts-ignore
    const json = JSON.parse(request.body.data.toString())
    const data = propertySchema.parse(json)
    const property = await createPropertyService.execute(data, images)

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

  app.get('/filter/property/:id', async (request, reply) => {
    const { id } = idParamSchema.parse(request.params)
    const property = await propertyRepository.filterByID(id)

    return reply.status(200).send(property)
  })

  app.delete('/properties/:id', async (request, reply) => {
    const { id } = idParamSchema.parse(request.params)
    const property = await propertyRepository.deleteProperty(id)
  })
}