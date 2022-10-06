import { RootState } from 'store/index';

export const getPage = (state: RootState) => state.page.value;
