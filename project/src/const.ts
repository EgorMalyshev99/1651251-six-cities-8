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

export const MAP_CENTER = {
  title: 'Amsterdam',
  lat: 52.3740300,
  lng: 4.8896900,
  zoom: 11,
};

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export const citiesList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const DEFAULT_CITY = citiesList[0];
