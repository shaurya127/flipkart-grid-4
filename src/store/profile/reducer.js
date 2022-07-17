import {
  GET_PROFILE_NFT_INITIAL,
  GET_PROFILE_NFT_SUCCESS,
  GET_PROFILE_NFT_FAILURE,
} from './constant';


const initialState = {
  nftData: [],
  nftDataLoading: false,
  nftDataError: false,
};

export const profileReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case GET_PROFILE_NFT_INITIAL:
      return {
        ...state,
        nftDataLoading: true,
      };
    case GET_PROFILE_NFT_SUCCESS:
      console.log('profile nft data', action, action.data);
      return {
        ...state,
        nftData: action.data,
        nftDataLoading: false
      };
    case GET_PROFILE_NFT_FAILURE:
      return {
        ...state,
        nftDataError: true,
      };
  }
  return state;
};