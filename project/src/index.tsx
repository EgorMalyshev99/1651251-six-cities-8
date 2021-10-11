import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Data = {
  OFFERS_COUNT: 120,
};

ReactDOM.render(
  <React.StrictMode>
    <App offersCount={Data.OFFERS_COUNT} />
  </React.StrictMode>,
  document.getElementById('root'));
