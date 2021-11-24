import { AuthStatus } from '../const';
import { Offers } from './offer';

export type State = {
  city: string,
  offers: Offers,
  isDataLoaded: boolean,
  userEmail: string | null,
  authorizationStatus: AuthStatus,
}
