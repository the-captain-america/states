import React, { createContext, useContext, useReducer } from 'react';
import { useReactSaga } from 'use-react-saga';
import allSagas from '../sagas/rootSagas';

import { createThunkMiddleware } from '../middlewares/thunk';
import allThunks from '../thunks/rootThunks';

// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';

// import { put, takeEvery, all, call } from 'redux-saga/effects';

// export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// const helloSaga = function* () {
//   // will exit immidately
//   console.log('Hello Sagas!');

//   yield call(delay, 1000);
//   yield put({ type: 'INCREMENT' });
// };

// // Reducer
// const reducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT': {
//       console.log('increment :::');
//       return state + 1;
//     }
//     default:
//       return state;
//   }
// };

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(helloSaga);

// export default store;

// import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
// import { createBrowserHistory } from 'history';
// import thunk from 'redux-thunk';

// import * as selectors from './selectors';
// import * as actions from './actions';
// import * as reducers from './reducerDashboard';

// import logger from './logger';
// import { useSelector } from '../utils/hooks';

// let REACT_APP_REDUX_LOGGER, NODE_ENV;
// const history = createBrowserHistory();
// if (process) {
//   REACT_APP_REDUX_LOGGER = process.env.REACT_APP_REDUX_LOGGER;
//   NODE_ENV = process.env.NODE_ENV;
// }
// const isDevelopment = NODE_ENV === 'development';
// const slices = combineReducers({
//   appState: combineReducers({ ...reducers }),
//   router: connectRouter(history),
// });
// const composeEnhancers =
//   isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         trace: true,
//         traceLimit: 25,
//       })
//     : compose;
// const middlewares = [applyMiddleware(thunk, routerMiddleware(history))];
// if (isDevelopment && REACT_APP_REDUX_LOGGER) {
//   middlewares.push(applyMiddleware(logger));
// }
// const store = createStore(slices, composeEnhancers(...middlewares));

// export default store;

// export { useSelector, selectors, actions, history };

export const DataLayerContext = createContext();

export function DataLayer({ initialState, reducer, children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const put = useReactSaga({ state, dispatch, saga: allSagas });
  const thunk = createThunkMiddleware({ dispatch, thunks: allThunks });

  return (
    <DataLayerContext.Provider
      value={{
        state,
        //Sync actions => for dispatching regular action objects
        dispatch,
        //Async actions => for using async functions (of type `generator`), which in turn dispatch an action object, in some unknown amount of time
        put,
        //
        thunk,
      }}
    >
      {children}
    </DataLayerContext.Provider>
  );
}
export const useDataLayerValue = () => useContext(DataLayerContext);
