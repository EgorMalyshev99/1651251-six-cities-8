import { AuthStatus, DEFAULT_CITY } from '../const';
import { State } from '../types/state';
import { ActionType, Actions } from '../types/action';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  authorizationStatus: AuthStatus.Unknown,
  isDataLoaded: false,
  userEmail: null,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: action.payload };

    case ActionType.AddOffers:
      return { ...state, offers: action.payload, isDataLoaded: true };

    case ActionType.RequireAuthorization:
      return { ...state, authorizationStatus: action.payload, isDataLoaded: true };

    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthStatus.NoAuth, userEmail: null };

    case ActionType.GetEmail:
      return { ...state, userEmail: action.payload };

    default:
      return state;
  }
};

export { reducer };
