import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import Main from './main';
import { AppRoute } from '../../const';
import { makeStore } from '../../test-mocks/mocks';

const store = makeStore();

describe('Component: Main', () => {
  it('should render "Main" when user navigate to "root" url', () => {
    const history = createMemoryHistory();
    history.push(AppRoute.Root);
    render(
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>,
    );
    expect(screen.getByText(/places to stay/i)).toBeInTheDocument();
  });
});
