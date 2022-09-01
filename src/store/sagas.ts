import { all } from 'redux-saga/effects';
import { watchFetchPersonsSaga } from 'store/persons/saga';

export default function* rootSaga() {
  yield all([watchFetchPersonsSaga()]);
}
