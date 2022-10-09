const FETCH_ASSET = 'FETCH_ASSET';
const FILTER_ASSET = 'FILTER_ASSET';

const initialState = [];

const apiUrl = 'https://api.coincap.io/v2/assets?limit=70';

const fetchAsset = async () => {
  const get = await fetch(apiUrl, { method: 'GET' });
  const response = await get.json();
  const assets = response.data;
  return assets;
};

export const assetItem = () => async (dispatch) => {
  const assets = await fetchAsset();
  const addasset = assets.slice(0, 29);
  dispatch({
    type: FETCH_ASSET,
    newState: addasset,
  });
};

export const assetFilter = (filter) => async (dispatch) => {
  const assets = await fetchAsset();
  if (filter === 'name') {
    assets.sort((a, b) => a.name.localeCompare(b.name));
  } else if (filter === 'vol') {
    assets.sort((a, b) => b.priceUsd - a.priceUsd);
  }
  const addasset = assets.slice(0, 29);
  dispatch({
    type: FILTER_ASSET,
    filterState: addasset,
  });
};

const assetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ASSET:
      return action.newState;
    case FILTER_ASSET:
      return action.filterState;
    default:
      return state;
  }
};

export default assetReducer;
