import Card from './offers-card';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { makeStore, makeFakeOffer } from '../../test-mocks/mocks';
import { Provider } from 'react-redux';

const offer = makeFakeOffer();
const history = createMemoryHistory();

describe('Component: OffersCard', () => {
  it('should render correctly', () => {
    render(
      <Provider store={makeStore()}>
        <Router history={history}>
          <Card
            offer={offer}
            isFavoritesPage={false}
            onMouseEnter={jest.fn()}
          />
        </Router>
      </Provider>,
    );
    expect(screen.getByText(/In bookmarks/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  });
});
