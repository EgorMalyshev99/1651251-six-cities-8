import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { CITIES_LIST, findMapCenter, SORT, SORTING_LIST } from '../../const';
import { changeCity, sortOffersBy } from '../../store/action';
import { getFilteredByCityOffers, getSortBy } from '../../store/app-data/selectors';
import { getCity } from '../../store/city-process/selectors';
import { Actions } from '../../types/action';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';
import CitiesList from '../cities-list/cities-list';
import MainNavigation from '../main-navigation/main-navigation';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';

const mapStateToProps = (state: State) => ({
  city: getCity(state),
  offers: getFilteredByCityOffers(state),
  sortBy: getSortBy(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(city: string) {
    dispatch(changeCity(city));
  },
  sortOffers: (sortBy: SORT) => dispatch(sortOffersBy(sortBy)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Main({ offers, city, onChangeCity, sortOffers, sortBy }: PropsFromRedux): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>();
  const [anchor, setAnchor] = useState(false);

  const handleClick = () => {
    if (!anchor) {
      setAnchor(true);
    } else {
      setAnchor(false);
    }
    return anchor;
  };


  const onCardHover = (offerId: number) => {
    const currentOffer = offers.find((offer) =>
      offer.id === offerId,
    );
    if (currentOffer) {
      setSelectedOffer(currentOffer);
    }
  };

  return (
    <>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>
      <div className="page page--gray page--main">
        <MainNavigation />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList citiesList={CITIES_LIST} selectedCity={city} setSelectedCity={onChangeCity} />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {city}</b>
                <form onClick={handleClick} className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by </span>
                  <span className="places__sorting-type" tabIndex={0}>
                    {SORTING_LIST.find((item) => item.value === sortBy)?.title}
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className={`places__options places__options--custom ${anchor ? 'places__options--opened' : ''}`}>
                    {SORTING_LIST.map((sortingItem) => (
                      <li
                        className={`places__option ${sortingItem.value === sortBy ? 'places__option--active' : ''}`}
                        tabIndex={0}
                        onClick={() => sortOffers(sortingItem.value)}
                        key={sortingItem.value}
                      >
                        {sortingItem.title}
                      </li>))}
                  </ul>
                </form>
                <OffersList offers={offers} isFavoritesPage={false} onCardHover={onCardHover} />
              </section>
              <div className="cities__right-section">
                <Map setAdditionalClass={'cities__map'} offers={offers} selectedOffer={selectedOffer} mapCenter={findMapCenter(city)} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export { Main };
export default connector(Main);
