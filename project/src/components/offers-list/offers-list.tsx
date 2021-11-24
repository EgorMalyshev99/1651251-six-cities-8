import { Offers } from '../../types/offer';
import OffersCard from '../offers-card/offers-card';

type OffersListProps = {
  offers: Offers;
  isFavoritesPage: boolean;
  onCardHover?: (id: number) => void;
}

function OffersList({ offers, isFavoritesPage, onCardHover }: OffersListProps): JSX.Element {
  return (
    <div className={`${isFavoritesPage ? 'favorites__places' : 'cities__places-list places__list tabs__content'}`}>
      {
        offers.map(
          (offer) => (
            <OffersCard
              onMouseEnter={() => {
                if (onCardHover) {
                  onCardHover(offer.id);
                }
              }}
              offer={offer}
              key={offer.id}
              isFavoritesPage={isFavoritesPage}
            />))
      }
    </div>
  );
}

export default OffersList;
