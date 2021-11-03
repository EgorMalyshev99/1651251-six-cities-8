import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import Login from '../login/login';
import Main from '../main/main';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { Offers } from '../../types/offer';
import { Comments } from '../../types/comment';

type Props = {
  offersCount: number;
  offers: Offers;
  comments: Comments;
}

function App({ offersCount, offers, comments }: Props): JSX.Element {
  const favoritesOffers = offers.filter((offer) => offer.favorite);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Main offersCount={offersCount} offers={offers} />
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
          <Property offers={offers} comments={comments} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
