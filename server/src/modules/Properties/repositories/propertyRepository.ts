import { PrismaClient } from '@prisma/client'
import { CreatePropertyDTO } from '../models/Property'

const prisma = new PrismaClient()

class PropertyRepository {
  //function to create a product
  async create(property: CreatePropertyDTO) { 
    await prisma.$connect()
    const newProperty = await prisma.property.create({
      data: {
        title: property.title,
        price_sell: property.price_sell,
        price_rent: property.price_rent,
        price_season: property.price_season,
        iptu: property.iptu,
        condominium: property.condominium,
        typeOfBusiness: property.typeOfBusiness,
        images: {
          create: {
            url: property.images.url
          }
        },
        characteristics: {
          create: {
            rooms: property.characteristics.rooms,
            car: property.characteristics.car,
            bathrooms: property.characteristics.bathrooms,
            suites: property.characteristics.suites,
            kitchens: property.characteristics.kitchens,
            total_area: property.characteristics.total_area,
            private_area: property.characteristics.private_area,
            infrastructure: property.characteristics.infrastructure
          }
        },
        street: property.street,
        neighborhood: property.neighborhood,
        city: property.city,
        state: property.state,
        description: property.description
      }
    })
    await prisma.$disconnect()
    return newProperty
  }

  //function to list all products
  async listAll() {
    await prisma.$connect()
    const allProducts = await prisma.property.findMany()
    await prisma.$disconnect()
    return allProducts
  }

  //function to find and product by name
  async findByTitle(title: string) {
    await prisma.$connect()
    const product = await prisma.property.findMany({
      where: {
        title: {
          contains: title
        },
      }
    })
    await prisma.$disconnect()
    return product
  }

  async findByID(id: string) {
    await prisma.$connect()
    const product = await prisma.property.findUnique({
      where: {
        id: Number(id)
      }
    })
    await prisma.$disconnect()
    return product
  }

  //Make error handling and delete image in the future
  async deleteProduct(id: string) {
    await prisma.$connect()
    const productDeleted = await prisma.property.delete({
      where: {
        id: Number(id)
      }
    })
    await prisma.$disconnect()
    return productDeleted
  }
}

export { PropertyRepository }