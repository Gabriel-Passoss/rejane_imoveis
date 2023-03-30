import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'
import aws, { EC2MetadataCredentials, S3 } from 'aws-sdk';

class S3Storage {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: 'sa-east-1',
    });
  }

  async saveFile(buffer: any, image: any): Promise<any> {
    const key = `${uuidv4().slice(0, 5)}-${image.originalname}`
    await this.client.putObject({
      Bucket: 'rejane',
      Key: key,
      ACL: 'public-read',
      Body: buffer,
      ContentType: image.mimetype
    }).promise();
    return key
  }

  async deleteFile(filename: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: 'rejane',
        Key: filename,
      })
      .promise();
  }

  async findFileURL(filename: string): Promise<string> {
    const fileURL = this.client.getSignedUrl('getObject', {
      Bucket: 'rejane',
      Key: filename
    })

    return fileURL
  }
}

export default S3Storage;