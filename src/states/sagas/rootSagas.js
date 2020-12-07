import { all, call } from 'redux-saga/effects';

// import sagas here
import { incrementCounter1Start } from './counter1/counterSagas';
import { counter1Sagas } from './counter2/counter2.sagas';

export default function* rootSaga() {
  yield all([call(incrementCounter1Start), call(counter1Sagas)]);
}
