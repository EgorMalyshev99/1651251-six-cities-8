import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { fetchFavoritesOffersAction } from '../../store/api-actions';
import { getFavoritesOffersByCity } from '../../store/app-data/selectors';
import { State } from '../../types/state';
import MainNavigation from '../main-navigation/main-navigation';
import OffersList from '../offers-list/offers-list';

const mapStateToProps = (state: State) => ({
  favoritesOffersByCity: getFavoritesOffersByCity(state),
});

const mapDispatchToProps = {
  fetchFavoritesOffers: () => fetchFavoritesOffersAction(),
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Favorites({ favoritesOffersByCity, fetchFavoritesOffers }: PropsFromRedux): JSX.Element {
  useEffect(() => {
    fetchFavoritesOffers();
  }, [fetchFavoritesOffers]);

  return (
    <div className="page">
      <MainNavigation />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritesOffersByCity.map((item) => (
                <li className="favorites__locations-items" key={item.city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{item.city}</span>
                      </a>
                    </div>
                  </div>
                  <OffersList isFavoritesPage offers={item.offers} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default connector(Favorites);
