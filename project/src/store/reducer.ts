import {AuthStatus, DEFAULT_CITY} from '../const';
import {State} from '../types/state';
import {ActionType, Actions} from '../types/action';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  authStatus: AuthStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};

    case ActionType.AddOffers:
      return {...state, offers: action.payload, isDataLoaded: true};

    case ActionType.RequireAuthorization:
      return {...state, authStatus: action.payload, isDataLoaded: true};

    case ActionType.RequireLogout:
      return {...state, authStatus: AuthStatus.NoAuth};

    default:
      return state;
  }
};

export {reducer};
