import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { AuthStatus } from '../../const';

export const getAuthorizationStatus = (state: State): AuthStatus => state[NameSpace.user].authorizationStatus;
export const getUserEmail = (state: State): string => state[NameSpace.user].userEmail;
