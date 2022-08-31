import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchPlanet, setPlanetSuccess } from 'store/planets/actions';

interface Result {
  json: () => void;
}

interface Body {
  name: string;
  population: string;
}

function* fetchPlanetSaga({
  payload: { query },
}: ReturnType<typeof fetchPlanet>) {
  try {
    const result: Result = yield call(fetch, query);
    const body: Body = yield call([result, result?.json]);
    yield put(setPlanetSuccess(body));
  } catch (e) {
    console.log(e);
  }
}

export function* watchFetchPlanetSaga() {
  yield takeEvery(String(fetchPlanet), fetchPlanetSaga);
}
