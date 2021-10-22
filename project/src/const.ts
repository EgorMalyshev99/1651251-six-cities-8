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
