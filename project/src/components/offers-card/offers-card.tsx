import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { changeFavoriteStatusAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';

const mapStateToProps = (state: State) => ({
  authorizationStatus: getAuthorizationStatus(state),
});
const mapDispatchToProps = {
  changeFavoriteStatus: (id: number, isFavorite: boolean) => changeFavoriteStatusAction(id, isFavorite),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = {
  offer: Offer;
  isFavoritesPage: boolean;
  onMouseEnter: () => void;
}

function OffersCard({ offer, onMouseEnter, authorizationStatus, isFavoritesPage, changeFavoriteStatus }: PropsFromRedux & Props): JSX.Element {
  const { price, rating, title, type, isFavorite } = offer;
  const history = useHistory();
  const offersCardPath = `/offer/${offer.id}`;

  const clickHandler = () => {
    if (authorizationStatus !== AuthStatus.Auth) {
      history.push(AppRoute.SignIn);
    }
    return changeFavoriteStatus(offer.id, !offer.isFavorite);
  };
  return (
    <article onMouseEnter={onMouseEnter} className={`place-card ${isFavoritesPage ? 'favorites__card' : 'cities__place-card '}`}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`place-card__image-wrapper ${isFavoritesPage ? 'favorites__image-wrapper' : 'cities__image-wrapper'}`}>
        <Link to={offersCardPath}>
          <img className="place-card__image" src={offer.images[0]} width="260" height="200" alt="" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={clickHandler} className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active ' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${100 / 5 * rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offersCardPath}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
}
export { OffersCard };
export default connector(OffersCard);
