import { Offers } from '../../types/offer';
import OffersCard from '../offers-card/offers-card';

type Props = {
  offers: Offers;
  isFavoritesPage: boolean;
  onCardHover?: (id: number) => void;
}

function OffersList({ offers, isFavoritesPage, onCardHover }: Props): JSX.Element {

  return (
    <div className={`${isFavoritesPage ? 'favorites__places' : 'cities__places-list places__list tabs__content'}`}>
      {offers.map((offer) => (
        <OffersCard
          offer={offer}
          isFavoritesPage={isFavoritesPage}
          onMouseOver={() => {
            if (onCardHover) {
              onCardHover(offer.id);
            }
          }}
          key={offer.id}
        />
      ))}
    </div>
  );
}

export default OffersList;
