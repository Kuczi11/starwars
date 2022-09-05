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
  next: string;
}

function* fetchPersonsSaga({
  payload: { query },
}: ReturnType<typeof fetchPersons>) {
  try {
    const results: Person[][] = [];
    let nextPage: string = '';
    const result: Result = yield call(fetch, query);
    const body: Body = yield call([result, result?.json]);
    results.push(body?.results);
    nextPage = body.next;
    while (nextPage !== null) {
      const result: Result = yield call(fetch, nextPage);
      const body: Body = yield call([result, result?.json]);
      results.push(body?.results);
      nextPage = body.next;
    }
    yield put(setPersonsSuccess(results));
  } catch (error) {
    yield put(setPersonsError(`An error occurred`));
  }
}

export function* watchFetchPersonsSaga() {
  yield takeEvery(String(fetchPersons), fetchPersonsSaga);
}
