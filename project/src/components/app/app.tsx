import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import Login from '../login/login';
import Main from '../main/main';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';

type Props = {
  offersCount: number;
}

function App({ offersCount }: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Main offersCount={offersCount} />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
          authStatus={AuthStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room} >
          <Property />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
