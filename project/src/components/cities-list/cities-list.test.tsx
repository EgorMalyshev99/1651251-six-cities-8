import CityList from './cities-list';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { makeFakeCity } from '../../test-mocks/mocks';

const history = createMemoryHistory();
const fakeCityList = new Array(5).fill(null).map(() => makeFakeCity());

describe('Component: CitiesList', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <CityList citiesList={fakeCityList} selectedCity={'Amsterdam'} setSelectedCity={jest.fn()} />
      </Router>,
    );
    expect(document.querySelectorAll('.locations__item').length).toBe(fakeCityList.length);
  });
});
