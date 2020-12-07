import { logger } from '../middlewares/logger';
import { demo } from '../middlewares/demo';
import { combineReducers, applyMiddelware } from '../utils';

import {
  counter1initialState,
  counter1Reducers,
} from './counter1/counter1.reducers';

import {
  counter2initialState,
  counter2Reducers,
} from './counter2/counter2.reducers';

import { uiInitialState, uiReducers } from './ui/ui.reducers';

import { authReducer, authInitialState } from './auth/authReducer';

export const combinedInitialStates = {
  counter1: counter1initialState,
  counter2: counter2initialState,
  ui: uiInitialState,
  auth: authInitialState,
};

export default combineReducers(
  applyMiddelware(
    //Add reducers here
    {
      counter1: counter1Reducers,
      counter2: counter2Reducers,
      ui: uiReducers,
      auth: authReducer,
    },
    [
      //Add middlewares here
      logger,
      demo,
    ],
  ),
);
