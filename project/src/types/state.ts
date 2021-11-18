import { AuthStatus } from '../const';
import { Offers } from './offer';

export type State = {
  city: string,
  offers: Offers,
  authStatus: AuthStatus,
  isDataLoaded: boolean,
}
