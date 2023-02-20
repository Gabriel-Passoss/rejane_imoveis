import { PropertyRepository } from '../repositories/propertyRepository'
import { CreatePropertyDTO } from '../models/Property'

class CreatePropertyService {
  constructor(private PropertyRepository: PropertyRepository) {}

  async execute(body: CreatePropertyDTO) {
    const productAlreadyExists = await this.PropertyRepository.findByTitle(body.title)

    if (productAlreadyExists) {
      const message = `Product ${body.title} already exists`
      return {message}
    } 
    else {
      const property = this.PropertyRepository.create(body)
      return property
    }
  }
}

export { CreatePropertyService }