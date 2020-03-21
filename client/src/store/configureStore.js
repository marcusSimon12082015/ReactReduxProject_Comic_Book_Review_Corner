import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import comicsReducer from '../reducers/comics';
import publishersReducer from '../reducers/publishers';
import charactersReducer from '../reducers/characters';
import reviewsReducer from '../reducers/reviews';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      comics: comicsReducer,
      publishers: publishersReducer,
      characters: charactersReducer,
      reviews: reviewsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
