import { AuthStatus, isCheckedAuth } from './const';

describe('Function: isCheckedAuth', () => {
  it('should return "true" when AuthorizationStatus is Unknown', () => {

    const unknownAuthorizationStatus = AuthStatus.Unknown;
    expect(isCheckedAuth(unknownAuthorizationStatus))
      .toBe(true);
  });
});
