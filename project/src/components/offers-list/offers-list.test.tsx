import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { makeFakeOffer, makeStore } from '../../test-mocks/mocks';
import OffersList from './offers-list';

const history = createMemoryHistory();
const fakeOffers = new Array(3).fill(null).map(() => makeFakeOffer());

describe('Component: OffersList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={makeStore()}>
        <Router history={history}>
          <OffersList
            offers={fakeOffers}
            isFavoritesPage={false}
            onCardHover={jest.fn()}
          />
        </Router>
      </Provider>,
    );
    expect(document.querySelectorAll('.places__list .place-card').length).toBe(fakeOffers.length);
  });
});
