import { expect, test, beforeAll } from 'vitest'
import request from 'supertest'

import { app } from "../app";

beforeAll(async () => {
  await app.ready()
})

test('The site administrator should be able to create a property', async () => {
  const response = await request(app.server).post('/properties').send({
    "title": "Test",
	  "price_sell": 2000000,
	  "price_rent": 10000,
	  "iptu": 2300,
	  "condominium": 800,
	  "typeOfBusiness": "SELL",
	  "images": {
		  "url": "https://facebook.com"
	  },
	  "characteristics": {
      "rooms": 4,
      "car": 3,
      "bathrooms": 2,
      "suites": 2,
      "kitchens": 1,
      "total_area": 2000,
      "private_area": 1500,
      "infrastructure": [
        "Kitchen", "Pool", "Soccer"
      ]
	  },
	  "street": "Rua Coronel Caetano",
	  "neighborhood": "Coloninha",
	  "city": "Florianópolis",
	  "state": "SC",
	  "description": "top do top"
  })

  expect(response.statusCode).toEqual(201)
})