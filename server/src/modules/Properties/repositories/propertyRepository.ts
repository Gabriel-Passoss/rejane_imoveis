import { PrismaClient } from '@prisma/client'
import { CreatePropertyDTO } from '../models/Property'

interface filterPropertiesData {
  typeOfBusiness: 'SELL' | 'RENT' | 'SEASON',
  property_type: string
  city: string
  rooms: string
  minValue: string
  maxValue: string
}

export const prisma = new PrismaClient()

class PropertyRepository {
  // function to create a product
  async create(property: CreatePropertyDTO, images: string[]) {
    await prisma.$connect()
      const propertyCreated = await prisma.property.create({
        data: {
          title: property.title,
          createdBy: property.createdBy,
          price_sell: property.price_sell,
          price_rent: property.price_rent,
          price_season: property.price_season,
          iptu: property.iptu,
          condominium: property.condominium,
          typeOfBusiness: property.typeOfBusiness,
          images: {
            create: {
              urls: images
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
              property_type: property.characteristics.property_type,
              infrastructure: property.characteristics.infrastructure,
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
    return propertyCreated
  }

  // function to list all products
  async listAll() {
    await prisma.$connect()
    const allProducts = await prisma.property.findMany({
      include: {
        characteristics: true,
        images: true
      }
    })
    await prisma.$disconnect()
    return allProducts
  }

  // function that lists all cities that have real estate
  async listAllCities() {
    const cities = await prisma.property.findMany({
      select: {
        city: true,
      },
      distinct: ['city'],
    });
    
    return cities
  }

  // function to find and product by name
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
      },
      include: {
        characteristics: true,
        images: true,
      }
    })
    await prisma.$disconnect()
    return product
  }

  // Make error handling and delete image in the future
  async deleteProperty(id: string) {
    await prisma.$connect()
    const productDeleted = await prisma.property.delete({
      where: {
        id: Number(id)
      }
    })
    await prisma.$disconnect()
    return productDeleted
  }

  async filterByCityAndBusiness(typeOfBusiness: 'SELL' | 'RENT' | 'SEASON', city: string) {
    const properties = await prisma.property.findMany({
      where: {
        typeOfBusiness,
        city
      },
      include: {
        characteristics: true,
        images: true
      }
    })
    return properties
  }

  async filterProperties(body: filterPropertiesData) {
    if(body.typeOfBusiness === 'SELL') {
      const properties = await prisma.property.findMany({
        where: {
          typeOfBusiness: body.typeOfBusiness,
          price_sell: {
            lte: Number(body.maxValue),
            gte: Number(body.minValue)
          },
          city: body.city,
          characteristics: {
            rooms: Number(body.rooms),
            property_type: body.property_type
          }
        },
        include: {
          characteristics: true,
          images: true
        }
      })
      return properties
    }

    if(body.typeOfBusiness === 'RENT') {
      const properties = await prisma.property.findMany({
        where: {
          typeOfBusiness: body.typeOfBusiness,
          price_rent: {
            lte: Number(body.maxValue),
            gte: Number(body.minValue)
          },
          city: body.city,
          characteristics: {
            rooms: Number(body.rooms),
            property_type: body.property_type
          }
        },
        include: {
          characteristics: true,
          images: true
        }
      })
      return properties
    }

    if(body.typeOfBusiness === 'SEASON') {
      const properties = await prisma.property.findMany({
        where: {
          typeOfBusiness: body.typeOfBusiness,
          price_season: {
            lte: Number(body.maxValue),
            gte: Number(body.minValue)
          },
          city: body.city,
          characteristics: {
            rooms: Number(body.rooms),
            property_type: body.property_type
          }
        },
        include: {
          characteristics: true,
          images: true
        }
      })
      return properties
    }
  }

  async filterByID(id: string) {
    const property = await prisma.property.findUnique({
      where: {
        id: Number(id)
      },
      include: {
        characteristics: true,
        images: true
      }
    })
    
    return property
  }
}

export { PropertyRepository }