import { nanoid } from '@reduxjs/toolkit';
import { Comments } from '../../types/comment';
import Review from '../review/review';

type Props = {
  comments: Comments,
}

function ReviewsList({ comments }: Props): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <Review comment={comment} key={nanoid()} />
      ))}
    </ul>
  );
}

export default ReviewsList;
