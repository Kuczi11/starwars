import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchPersons,
  setPersonsError,
  setPersonsSuccess,
} from 'store/persons/actions';
import { Person } from 'store/persons/defaultState';

interface Result {
  json: () => void;
}

interface Body {
  results: Person[];
}

function* fetchPersonsSaga({
  payload: { query },
}: ReturnType<typeof fetchPersons>) {
  try {
    const result: Result = yield call(fetch, query);
    const body: Body = yield call([result, result?.json]);
    yield put(setPersonsSuccess(body?.results));
  } catch (error) {
    yield put(setPersonsError(`An error occurred`));
  }
}

export function* watchFetchPersonsSaga() {
  yield takeEvery(String(fetchPersons), fetchPersonsSaga);
}
