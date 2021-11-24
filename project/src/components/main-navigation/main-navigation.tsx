import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { State } from '../../types/state';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit() {
    dispatch(logoutAction());
  },
});

const mapStateToProps = (state: State) => ({
  auth: state.authorizationStatus,
  email: state.userEmail,
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function MainNavigation({ auth, email, onSubmit }: PropsFromRedux): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {auth === AuthStatus.Auth && (
                <>
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{email}</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a onClick={onSubmit} className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </>
              )}
              {(auth === AuthStatus.NoAuth || auth === AuthStatus.Unknown) && (
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.SignIn}>
                    {/* <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div> */}
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>

  );
}

export { MainNavigation };
export default connector(MainNavigation);
