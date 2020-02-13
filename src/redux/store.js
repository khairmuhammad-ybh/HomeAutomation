import {createStore, compose, applyMiddleware} from 'redux';
import MainReduer from './reducers/main.reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const rootReducer = (state, action) => {
  return MainReduer(state, action);
};

const middlewares = [];

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares)),
);
