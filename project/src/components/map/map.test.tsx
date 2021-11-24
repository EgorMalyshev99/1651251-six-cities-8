import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Map from './map';
import { fakeOffers, makeFakeCity, makeStore } from '../../test-mocks/mocks';

const history = createMemoryHistory();
const fakeCity = makeFakeCity();

describe('Component: Map', () => {
  it('should render correctly', () => {
    render(
      <Provider store={makeStore()}>
        <Router history={history}>
          <Map mapCenter={fakeCity} offers={fakeOffers} setAdditionalClass={'additionalClass'} />
        </Router>
      </Provider>,
    );
    expect(document.querySelectorAll('.leaflet-marker-icon').length).toBe(fakeOffers.length);
  });
});

