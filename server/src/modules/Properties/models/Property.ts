interface Image {
  url: string,
}

interface Characteristics {
  rooms: number,
  car: number,
  bathrooms: number,
  suites: number,
  kitchens: number,
  total_area: number,
  private_area: number,
  property_type: string
  infrastructure: string[],

}

export interface CreatePropertyDTO {
  title: string,
  createdBy: string
  price_sell?: number,
  price_rent?: number,
  price_season?: number,
  iptu?: number,
  condominium?: number
  typeOfBusiness: 'RENT' | 'SELL' | 'SEASON',
  images: Image[],
  characteristics: Characteristics,
  street: string,
  neighborhood: string,
  city: string,
  state: string,
  description?: string
}