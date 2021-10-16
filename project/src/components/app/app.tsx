import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Main from '../main/main';
import NotFound from '../not-found/not-found';

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
        <Route exact path={AppRoute.Favorites}>
          <Favorites />
        </Route>
        <Route exact path={AppRoute.NotFound}>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
