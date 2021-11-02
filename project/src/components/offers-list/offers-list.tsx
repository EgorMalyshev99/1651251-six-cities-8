import { useState } from 'react';
import { Offers } from '../../types/offer';
import OffersCard from '../offers-card/offers-card';

type Props = {
  offers: Offers;
  isFavoritesPage: boolean;
}

function OffersList({ offers, isFavoritesPage }: Props): JSX.Element {
  const [, setActiveOffer] = useState(offers[0].id);

  return (
    <div className={`${isFavoritesPage ? 'favorites__places' : 'cities__places-list places__list tabs__content'}`}>
      {offers.map((offer) => <OffersCard offer={offer} isFavoritesPage={isFavoritesPage} onMouseOver={() => setActiveOffer(offer.id)} key={offer.id} />)}
    </div>
  );
}

export default OffersList;
