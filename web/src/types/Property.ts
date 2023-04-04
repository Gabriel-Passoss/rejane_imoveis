export type Property = {
  id: Number,
  title: String,
  createdBy: string
  price_sell: Number,
  price_rent: Number,
  price_season: Number,
  iptu: Number,
  condominium: Number,
  typeOfBusiness: String,
  date: Date,
  images: Images,
  characteristics: Characteristics,
  street: String,
  neighborhood: String,
  city: String,
  state: String,
  description: String
}

type Images = {
  id: Number,
  urls: [string]
}

type Characteristics = {
  id: Number,
  rooms: Number,
  car: Number,
  bathrooms: Number,
  suites: Number,
  kitchens: Number,
  total_area: Number,
  private_area: Number,
  property_type: string,
  infrastructure: String[] 
}