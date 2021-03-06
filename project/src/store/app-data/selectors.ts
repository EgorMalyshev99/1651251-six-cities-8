import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { Offers, Offer } from '../../types/offer';
import { Reviews } from '../../types/review';
import { SORT } from '../../const';

export const getOffers = (state: State): Offers => state[NameSpace.data].offers;

export const getOfferById = (state: State, id: string): Offer | undefined => getOffers(state).find((offer: Offer) => offer.id.toString() === id);

export const getComments = (state: State): Reviews => state[NameSpace.data].comments;

export const getFavoritesOffersByCity = (state: State): Array<{ city: string, offers: Offers }> => {
  const favoriteOffers = state[NameSpace.data].favoritesOffers;
  const cityMap: {
    [city: string]: Offers;
  } = {};

  favoriteOffers.forEach((offer) => {
    const cityName = offer.city.name;
    if (!cityMap[cityName]) {
      cityMap[cityName] = [];
    }

    cityMap[cityName].push(offer);
  });

  return Object.keys(cityMap).map((city) => ({ city, offers: cityMap[city] }));
};

export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;

export const getFilteredByCityOffers = (state: State): Offers => {
  const filteredOffers = state[NameSpace.data].offers.filter((offer) => offer.city.name === state[NameSpace.city].city);
  const sortBy = state[NameSpace.data].sortBy;
  switch (sortBy) {
    case SORT.Popular:
      return filteredOffers;
    case SORT.PriceHighToLow:
      return filteredOffers.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        }
        return 0;
      });
    case SORT.PriceLowToHigh:
      return filteredOffers.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        } else if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    case SORT.Rating:
      return filteredOffers.sort((a, b) => {
        if (a.rating > b.rating) {
          return -1;
        } else if (a.rating < b.rating) {
          return 1;
        }
        return 0;
      });
    default:
      return filteredOffers;
  }
};

export const getNearbyOffers = (state: State): Offers => state[NameSpace.data].nearbyOffers;

export const getSortBy = (state: State): SORT => state[NameSpace.data].sortBy;
