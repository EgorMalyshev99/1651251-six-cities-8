import { userProcess } from './user-process';
import { AuthStatus } from '../../const';
import { getUser, requireAuthorization, requireLogout } from '../action';
import { makeFakeUser } from '../../test-mocks/mocks';

const fakeUser = makeFakeUser();

describe('Reducer: userProcess', () => {
  it('should change Authorization status on "AUTH"', () => {
    const state = {
      authorizationStatus: AuthStatus.Unknown, user: {
        avatarUrl: '',
        email: '',
        id: 0,
        isPro: false,
        name: '',
        token: '',
      },
    };
    expect(userProcess(state, requireAuthorization(AuthStatus.Auth)).authorizationStatus)
      .toEqual(AuthStatus.Auth);
  });

  it('should change Authorization status on "NO_AUTH"', () => {
    const state = { authorizationStatus: AuthStatus.Auth, user: fakeUser };
    expect(userProcess(state, requireLogout()))
      .toEqual({
        authorizationStatus: AuthStatus.NoAuth, user: {
          avatarUrl: '',
          email: '',
          id: 0,
          isPro: false,
          name: '',
          token: '',
        },
      });
  });

  it('should get user info', () => {
    const state = {
      authorizationStatus: AuthStatus.Auth, user: {

      },
    };
    expect(userProcess(state, getUser(fakeUser)))
      .toEqual({ authorizationStatus: AuthStatus.Auth, user: fakeUser });
  });
});
