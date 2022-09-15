import { configureStore } from '@reduxjs/toolkit';
import reducers from 'store/reducers';
import { peopleDataApi } from 'store/query';

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(peopleDataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
