import { createStore, applyMiddleware } from 'redux';
import { conposeWithDevTools } from 'redux-dev-tools';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/moviesReducer';

export default createStore(rootReducer, composeWithDevTools( applyMiddleware(thunk) ) );

