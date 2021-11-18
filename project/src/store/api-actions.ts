import { ThunkActionResult } from '../types/action';
import { Offer } from '../types/offer';
import { APIRoute } from '../const';
import { addOffers } from './action';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, getState, api): Promise<void> => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(addOffers(data));
  };
