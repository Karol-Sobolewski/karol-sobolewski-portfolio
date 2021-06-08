import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';

import menuReducer from './menuRedux';
import projectReducer from './projectRedux';
import skillReducer from './skillRedux';
import linkReducer from './linkRedux';
import aboutReducer from './aboutRedux';
import usesReducer from './usesRedux';

const reducers = {
  activeLink: linkReducer,
  menu: menuReducer,
  projects: projectReducer,
  skills: skillReducer,
  about: aboutReducer,
  uses: usesReducer,
};

/* Add blank reducers for initial state properties without reducers */
Object.keys(initialState).forEach((item) => {
  if (item) {
    if (typeof reducers[item] === `undefined`) {
      reducers[item] = (statePart = null) => statePart;
    }
  }
});

const combinedReducers = combineReducers(reducers);

/* create store */
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
