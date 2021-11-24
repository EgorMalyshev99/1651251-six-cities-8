import CommentForm from '../comment-form/comment-form';
import { CommentPost, Review } from '../../types/review';
import SingleReview from '../review/review';
import { AuthStatus } from '../../const';

type Props = {
  reviews: Review[];
  onCommentFormSubmit: (comment: CommentPost) => void;
  authorizationStatus: AuthStatus,
}

function Reviews({ reviews, onCommentFormSubmit, authorizationStatus }: Props): JSX.Element {
  const reviewsCount = reviews.length;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map(
            (review) => (
              <SingleReview commentReview={review} key={review.id} />
            ))
        }

      </ul>
      {authorizationStatus === AuthStatus.Auth &&
        <CommentForm onCommentFormSubmit={onCommentFormSubmit} />}
    </section>
  );
}

export default Reviews;
