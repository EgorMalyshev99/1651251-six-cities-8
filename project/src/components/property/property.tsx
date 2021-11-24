import { nanoid } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { findMapCenter } from '../../const';
import { changeFavoriteStatusAction, fetchCommentsAction, fetchNearbyOffersAction, postComment } from '../../store/api-actions';
import { getComments, getNearbyOffers, getOfferById } from '../../store/app-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { Offer } from '../../types/offer';
import { CommentPost } from '../../types/review';
import { State } from '../../types/state';
import MainNavigation from '../main-navigation/main-navigation';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import Reviews from '../reviews/reviews';

type Props = {
  offerId: string,
}

const mapStateToProps = (state: State, ownProps: Props) => ({
  comments: getComments(state),
  nearbyOffers: getNearbyOffers(state),
  offer: getOfferById(state, ownProps.offerId),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = {
  fetchComment: (id: string) => fetchCommentsAction(id),
  fetchNearbyOffers: (id: string) => fetchNearbyOffersAction(id),
  changeFavoriteStatus: (id: number, isFavorite: boolean) => changeFavoriteStatusAction(id, isFavorite),
  onCommentFormSubmit: (id: string, comment: CommentPost) => postComment(id, comment),
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Property({ offer, comments, offerId, nearbyOffers, fetchComment, fetchNearbyOffers, changeFavoriteStatus, onCommentFormSubmit, authorizationStatus }: PropsFromRedux & Props): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>();

  useEffect(() => {
    fetchComment(offerId);
    fetchNearbyOffers(offerId);
  }, [offerId, fetchComment, fetchNearbyOffers]);

  const onCardHover = (id: number) => {
    const currentOffer = nearbyOffers.find((item) =>
      item.id === id,
    );
    if (currentOffer) {
      setSelectedOffer(currentOffer);
    }
  };

  if (!offer) {
    return <div></div>;
  }
  const { images, rating, type, bedrooms, maxAdults, price, goods, host, description, city, isFavorite } = offer;

  return (
    <div className="page">
      <MainNavigation />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image: string | undefined) => (
                <div className="property__image-wrapper" key={nanoid()}>
                  <img className="property__image" src={image} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                offer?.isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>)
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer?.title}
                </h1>
                <button
                  className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`}
                  type="button"
                  onClick={() => changeFavoriteStatus(offer.id, !offer.isFavorite)}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${100 / 5 * rating}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((item) => (
                      <li className="property__inside-item" key={nanoid()}>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                  {/* <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p> */}
                </div>
              </div>
              <Reviews reviews={comments} onCommentFormSubmit={(comment: CommentPost) => onCommentFormSubmit(offerId, comment)} authorizationStatus={authorizationStatus} />
            </div>
          </div>
          <Map setAdditionalClass={'property__map'} offers={nearbyOffers} selectedOffer={selectedOffer} mapCenter={findMapCenter(city.name)} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList offers={nearbyOffers} isFavoritesPage={false} onCardHover={onCardHover} />
          </section>
        </div>
      </main>
    </div>
  );
}

export { Property };
export default connector(Property);
