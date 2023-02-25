import { expect, describe, it, beforeAll, beforeEach, afterAll } from 'vitest'
import request from 'supertest'

import { prisma } from '../modules/Properties/repositories/propertyRepository';
import { app } from "../app";
import { createProperty } from './dataTests';

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  const deleteImages = prisma.image.deleteMany()
  const deleteCharacteristics = prisma.characteristics.deleteMany()
  const deleteProperty = prisma.property.deleteMany()

  await prisma.$transaction([
    deleteImages,
    deleteCharacteristics,
    deleteProperty,
  ])

  await prisma.$disconnect()
})

describe('Properties Routes', () => {
  it('should be able to create a property', async () => {
    const response = await request(app.server).post('/properties').send(createProperty)
     
    expect(response.statusCode).toEqual(201)
  })

  it('should be able to list all properties', async () => {
    await request(app.server).post('/properties').send(createProperty).expect(201)
    await request(app.server).get('/properties').expect(200)
  })

  it('should be able to list one property by ID', async () => {
    const createPropertyResponse = await request(app.server).post('/properties').send(createProperty).expect(201)

    await request(app.server).get(`/properties/${createPropertyResponse.body.id}`).expect(200)
    // expect(propertyResponse.body).toEqual([
    //   expect.objectContaining(createProperty)
    // ])
  })
})