import Jimp from 'jimp'

export class CreateWatermark {
  async teste(image: Buffer): Promise<any> {
    try {
      const originalImage = await Jimp.read(image)
      
      const watermark = await Jimp.read('src/utils/watermark.png')

      watermark.resize(200, 200)
  
      const originalImageWidth = originalImage.bitmap.width;
      const originalImageHeight = originalImage.bitmap.height;
      const watermarkWidth = watermark.bitmap.width;
      const watermarkHeight = watermark.bitmap.height;

      // Calcula as coordenadas x e y para centralizar a marca d'água na imagem
      const x = Math.round((originalImageWidth - watermarkWidth) / 2);
      const y = Math.round((originalImageHeight - watermarkHeight) / 2);

      originalImage.composite(watermark, x, y, {
        mode: Jimp.BLEND_SOURCE_OVER,
        opacityDest: 1,
        opacitySource: 0.3
      })

      const buffer = await originalImage.getBufferAsync(Jimp.MIME_JPEG)
      return buffer
  } catch (err) {
    console.log(err)
  }
  }
}
