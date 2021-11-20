import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import Login from '../login/login';
import Main from '../main/main';
import NotFound from '../not-found/not-found';
import { State } from '../../types/state';
import PrivateRoute from '../private-route/private-route';
import { connect, ConnectedProps } from 'react-redux';
import Loading from '../loading/loading';

const mapStateToProps = (state: State) => ({
  offers: state.offers,
  favoritesOffers: state.offers,
  authorizationStatus: state.authStatus,
  isDataLoaded: state.isDataLoaded,
});
const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

function App(props: Props): JSX.Element {
  const { offers, isDataLoaded, favoritesOffers } = props;

  if (!isDataLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Main />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites offers={favoritesOffers} />}
          authStatus={AuthStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room} >
          <Property offers={offers} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export { Main };
export default connector(App);
