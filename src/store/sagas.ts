import { all } from 'redux-saga/effects';
import { watchFetchPersonsSaga } from 'store/persons/saga';
import { watchFetchPlanetSaga } from 'store/planets/saga';

export default function* rootSaga() {
  yield all([watchFetchPersonsSaga(), watchFetchPlanetSaga()]);
}
