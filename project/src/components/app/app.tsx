import { Switch, Route, Router } from 'react-router-dom';
import { AppRoute, isCheckedAuth } from '../../const';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import Login from '../login/login';
import Main from '../main/main';
import NotFound from '../not-found/not-found';
import { State } from '../../types/state';
import PrivateRoute from '../private-route/private-route';
import { connect, ConnectedProps } from 'react-redux';
import Loading from '../loading/loading';
import BrowserHistory from '../../browser-history';

const mapStateToProps = (state: State) => ({
  offers: state.offers,
  favoritesOffers: state.offers,
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});
const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

function App(props: Props): JSX.Element {
  const { offers, favoritesOffers, authorizationStatus, isDataLoaded } = props;

  if (!isDataLoaded || isCheckedAuth(authorizationStatus)) {
    return <Loading />;
  }
  return (
    <Router history={BrowserHistory}>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Main />
        </Route>
        <Route render={({ history }) => <Login onSubmitButtonClick={() => { history.push(AppRoute.Root); }} />} exact path={AppRoute.SignIn}></Route>
        <PrivateRoute exact path={AppRoute.Favorites} render={() => <Favorites offers={favoritesOffers} />}></PrivateRoute>
        <Route exact path={AppRoute.Room} >
          <Property offers={offers} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

// export { Main };
export default connector(App);
