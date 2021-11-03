type Location = {
  city: string,
  lat: number,
  lng: number,
}

export type Offer = {
  id: number,
  name: string,
  type: string,
  price: number,
  images: string[],
  rating: number,
  favorite: boolean,
  premium: boolean,
  maxAdults: number,
  bedroomsCount: number,
  facilities: string[],
  hostName: string,
  hostText: string,
  hostRank: string,
  location: Location,
}

export type Offers = Offer[]
