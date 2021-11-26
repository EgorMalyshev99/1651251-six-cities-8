import { City } from './types/offer';

export enum AppRoute {
  SignIn = '/login',
  Root = '/',
  Room = '/offer/:id',
  Favorites = '/favorites'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  NearbyOffers = '/nearby',
}

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

const defaultZoom = 13;

export const CITIES_LIST: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: defaultZoom,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.933594,
      longitude: 6.961899,
      zoom: defaultZoom,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8465573,
      longitude: 4.351697,
      zoom: defaultZoom,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.3779562,
      longitude: 4.897070,
      zoom: defaultZoom,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: defaultZoom,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: defaultZoom,
    },
  },
];

export const DEFAULT_CITY = CITIES_LIST[0].name;

export const findMapCenter = (cityName: string): City | undefined => CITIES_LIST.find((city) => city.name === cityName);

export const isCheckedAuth = (authorizationStatus: AuthStatus): boolean => authorizationStatus === AuthStatus.Unknown;

export const RATING_POINTS = ['5', '4', '3', '2', '1'];

export enum SORT {
  Popular = 'Popular',
  Rating = 'Rating',
  PriceLowToHigh = 'Price: low to hight',
  PriceHighToLow = 'Price: hight to low',
}

export const SORTING_LIST = [{
  value: SORT.Popular,
  title: 'Popular',
}, {
  value: SORT.PriceLowToHigh,
  title: 'Price: low to hight',
}, {
  value: SORT.PriceHighToLow,
  title: 'Price: hight to low',
}, {
  value: SORT.Rating,
  title: 'Rating',
}];

export const PROPERTY_TYPE = [{
  value: 'apartment',
  title: 'Apartment',
}, {
  value: 'room',
  title: 'Private Room',
},
{
  value: 'house',
  title: 'House',
},
{
  value: 'hotel',
  title: 'Hotel',
},
];
