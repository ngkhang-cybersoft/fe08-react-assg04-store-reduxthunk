/**
 * Base URL API
 */
export const BASE_API = 'https://apistore.cybersoft.edu.vn/';

/**
 * Define API using Store
 *
 *	@link https://apistore.cybersoft.edu.vn/swagger/index.html
 */
export const API_STORE = {
  GET_STORES: 'api/Store/getAll',
  GET_STORE_BY_KEYWORD: (keyword) => `api/Store/getAll?${keyword}`,
  GET_STORE_BY_ID: (storeId) => `api/Store/getbyid?id=${storeId}`,
  ADD_STORE: `api/Store`,
  UPDATE_STORE: (storeId) => `api/Store?id=${storeId}`,
  DELETE_STORE: 'api/Store',
};

export const REDUCERS = {
  storeReducer: 'storeReducer',
};

export const GLOBAL_STATES = {
  lstStore: 'lstStore',
};
