import { createSlice } from '@reduxjs/toolkit';
import httpStore from '../../utils/config';
import { API_STORE, GLOBAL_STATES, REDUCERS } from '../../utils/constants';

const { lstStore } = GLOBAL_STATES;
const { GET_STORES } = API_STORE;

const initialState = {
  [lstStore]: [],
};

const storeReducer = createSlice({
  name: [REDUCERS.storeReducer],
  initialState,
  reducers: {
    getStores: (state, { payload }) => {
      state[lstStore] = payload;
    },
  },
});

export const { getStores } = storeReducer.actions;

export default storeReducer.reducer;

export const getStoresAsync = () => {
  return async (dispatch) => {
    const res = await httpStore.get(GET_STORES);
    const actionCreator = getStores(res.data.content);
    dispatch(actionCreator);
  };
};
