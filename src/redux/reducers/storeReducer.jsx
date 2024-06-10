import { createSlice } from '@reduxjs/toolkit';
import httpStore from '../../utils/config';
import { API_STORE, GLOBAL_STATES, REDUCERS } from '../../utils/constants';

const { lstStore } = GLOBAL_STATES;

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
    const res = await httpStore.get(API_STORE.GET_STORES);
    const actionCreator = getStores(res.data.content);
    dispatch(actionCreator);
  };
};

export const delStoreAsync = (storeId) => {
  return async (dispatch) => {
    try {
      const res = await httpStore.delete(API_STORE.DELETE_STORE, {
        data: [storeId],
      });
      const actionThunk = getStoresAsync();
      dispatch(actionThunk);
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  };
};

export const addStoreAsync = (store) => {
  return async () => {
    try {
      const res = await httpStore.post(API_STORE.ADD_STORE, store);
      return [res.data.statusCode, res.data.content];
    } catch (error) {
      return [error.response.status, error.response.statusText];
    }
  };
};

export const updateStoreAsync = (id, data) => {
  return async (dispatch) => {
    try {
      const res = await httpStore.put(API_STORE.UPDATE_STORE(id), data);
      const actionThunk = getStoresAsync();
      dispatch(actionThunk);
      return [res.data.statusCode, res.data.content];
    } catch (error) {
      return [error.response.status, error.response.statusText];
    }
  };
};
