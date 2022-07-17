import {
  WALLET_LOADING,
  TOGGLE_POPUP,
  ERROR,
  UPDATE_WALLET
} from "./walletAction";

const initialState = {
  wallet: null,
  isWalletModelOpen: false,
  isLoading : false,
  Error : null,
};

export const walletReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case TOGGLE_POPUP:
      return {
        ...state,
        isWalletModelOpen: !state.isWalletModelOpen,
      };
    case WALLET_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case ERROR:
      return {
        ...state,
        Error: action.ErrorText
      }
    case UPDATE_WALLET:
      console.log('update wallet reducer is called');
      return {
        ...state,
        wallet: action.wallet,
        isWalletModelOpen: false,
      }

  }
  return state;
};