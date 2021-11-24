import { AuthStatus } from '../const';
import { RootState } from '../store/root-reducer';
import { Offers } from './offer';
import { Reviews } from './review';

export type AppData = {
  offers: Offers,
  comments: Reviews,
  isDataLoaded: boolean,
}

export type CityProcess = {
  city: string,
}

export type UserProcess = {
  authorizationStatus: AuthStatus,
  userEmail: string,
}

export type State = RootState;

// export type State = {
//   city: string,
//   offers: Offers,
//   isDataLoaded: boolean,
//   userEmail: string | null,
//   authorizationStatus: AuthStatus,
// }
