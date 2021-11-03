import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';

type Props = {
  offer: Offer;
  isFavoritesPage: boolean;
  onMouseOver: () => void;
}

function OffersCard({ offer, isFavoritesPage, onMouseOver }: Props): JSX.Element {
  const {
    name,
    type,
    price,
    images,
    rating,
    premium,
  } = offer;

  const offersCardPath = `/offer/${offer.id}`;

  return (
    <article onMouseOver={onMouseOver} className={`place-card ${isFavoritesPage ? 'favorites__card' : 'cities__place-card '}`}>
      {
        premium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
      }
      <div className={`place-card__image-wrapper ${isFavoritesPage ? 'favorites__image-wrapper' : 'cities__image-wrapper'}`}>
        <Link to={offersCardPath}>
          <img
            className="place-card__image"
            src={images[0]}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">
              &#47;&nbsp;night
            </span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${100 / 5 * rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">
            <Link to={offersCardPath}>{name}</Link>
          </a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OffersCard;
