import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { comments } from './mocks/comments';
import { offers } from './mocks/offers';

const Data = {
  OFFERS_COUNT: offers.length,
};

ReactDOM.render(
  <React.StrictMode>
    <App offersCount={Data.OFFERS_COUNT} offers={offers} comments={comments} />
  </React.StrictMode>,
  document.getElementById('root'));
