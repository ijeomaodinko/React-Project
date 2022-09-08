const apiUrl = 'https://api.coincap.io/v2/assets/';

const FETCH_EACH = 'FETCH_EACH';
const initialState = [];

const fetchAssetById = async (id) => {
  const response = await fetch(`${apiUrl}${id}`, { method: 'GET' });
  const addSingleAsset = await response.json();
  return addSingleAsset;
};

export const assetSingle = (id) => async (dispatch) => {
  const response = await fetchAssetById(id);
  dispatch({
    type: FETCH_EACH,
    payload: response.data,
  });
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EACH:
      return action.payload;
    default:
      return state;
  }
};

export default detailReducer;
