import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';// import userEvent from '@testing-library/user-event';
import Favorites from './favorites';
import { AppRoute } from '../../const';
import { makeStore } from '../../test-mocks/mocks';

const store = makeStore();

describe('Component: Favorites', () => {
  it('should render "Favorites" when user navigate to "favorites" url', () => {
    const history = createMemoryHistory();
    history.push(AppRoute.Favorites);

    render(
      <Provider store={store}>
        <Router history={history}>
          <Favorites />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });
});
