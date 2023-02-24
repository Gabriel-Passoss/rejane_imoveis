import { expect, describe, it, beforeAll } from 'vitest'
import request from 'supertest'

import { app } from "../app";
import { createProperty } from './dataTests';

beforeAll(async () => {
  await app.ready()
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
    await request(app.server).post('/properties').send(createProperty).expect(201)

    await request(app.server).get('/properties/1').expect(200)
  })
})