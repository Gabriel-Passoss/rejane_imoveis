

import { PropertyRepository } from '../repositories/propertyRepository'
import { CreatePropertyDTO } from '../models/Property'
import { MultipartFile } from '@fastify/multipart'

import { CreateWatermark } from '../../../utils/CreateWatermark'
import S3Storage from '../../../utils/S3Storage'


class CreatePropertyService {
  constructor(private PropertyRepository: PropertyRepository) {}
  private s3 = new S3Storage()
  private watermark = new CreateWatermark()

  async execute(body: CreatePropertyDTO, files: any) {
    const photos: string[] = []
    await Promise.all(files.map(async (image: any) => {
      const convertedImage = await this.watermark.teste(image.buffer);
      const fileName = await this.s3.saveFile(convertedImage, image)
      const fileURL = await this.s3.findFileURL(fileName)
      const [ url,  ] = fileURL.split('?')
      photos.push(url)
      }))
      
    const property = await this.PropertyRepository.create(body, photos)
    return property
  }
}

export { CreatePropertyService }