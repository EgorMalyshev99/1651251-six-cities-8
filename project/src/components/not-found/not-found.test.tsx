import NotFound from './not-found';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';

const history = createMemoryHistory();

describe('Component: NotFound', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <NotFound />
      </Router>,
    );
    expect(screen.getByText(/Страница не найдена/i)).toBeInTheDocument();
    expect(screen.getByText(/Похоже, что по этому адресу ничего нет :(/i)).toBeInTheDocument();
  });
});
