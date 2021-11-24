import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { AuthStatus } from '../../const';
import { User } from '../../types/user';

export const getAuthorizationStatus = (state: State): AuthStatus => state[NameSpace.user].authorizationStatus;
export const getUser = (state: State): User => state[NameSpace.user].user;
