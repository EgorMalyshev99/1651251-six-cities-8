import { ActionType } from '../types/action';
import { Offers } from '../types/offer';
import { AuthStatus } from '../const';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const addOffers = (offers: Offers) => ({
  type: ActionType.AddOffers,
  payload: offers,
} as const);

export const requireAuthorization = (authStatus: AuthStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const getEmail = (email: string) => ({
  type: ActionType.GetEmail,
  payload: email,
} as const);
