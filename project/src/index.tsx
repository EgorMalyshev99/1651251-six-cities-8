import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createAPI } from './services/api';
import App from './components/app/app';
import { AuthStatus } from './const';
import { reducer } from './store/reducer';
import { requireAuthorization } from './store/action';
import thunk from 'redux-thunk';
import { ThunkAppDispatch } from './types/action';
import { fetchOffersAction } from './store/api-actions';

const api = createAPI(() => store.dispatch(requireAuthorization(AuthStatus.NoAuth)));
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ));

(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
