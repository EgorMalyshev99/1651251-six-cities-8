import { Route, Redirect } from 'react-router-dom';
import Favorites from '../favorites/favorites';

const isLogged = false;

export default function PrivetRoute(): JSX.Element {
  return (
    <Route
      render={() => isLogged ? <Favorites /> : <Redirect to='/login' />}
    />
  );
}
