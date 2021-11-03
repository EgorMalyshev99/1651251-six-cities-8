import { Comment } from '../../types/comment';

type Props = {
  comment: Comment,
}

function Review({ comment }: Props): JSX.Element {
  const {
    author,
    text,
    date,
    image,
    rating,
  } = comment;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={image} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {author}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${100 / 5 * rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
}

export default Review;
