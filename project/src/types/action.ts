import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {changeCity , addOffers, requireAuthorization, requireLogout} from '../store/action';
import { State } from './state';

export enum ActionType {
  ChangeCity = 'city/changeCity',
  AddOffers = 'offers/addOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof addOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;