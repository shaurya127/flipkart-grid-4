import axios from 'axios';
import {
  GET_PROFILE_NFT_INITIAL, GET_PROFILE_NFT_SUCCESS, GET_PROFILE_NFT_FAILURE
} from './constant';
// const apiKey = 'sUFA8R6qs3OkJxrY9riiWlH_s7GJvfbH';
const apiKey = '2Zm5wkjGQ-C6p3FjMYs5f_SJuvgW7rdY';

export const getWalletNfts = (payload) => {

  return async (dispatch) => {
    const { ownerAddr } = payload || null;
    try {
      dispatch({
        type: GET_PROFILE_NFT_INITIAL
      });

      const res = await axios.get(`https://eth-mainnet.alchemyapi.io/v2/${apiKey}/getNFTs/?owner=${ownerAddr}`);
      // console.log("yoyo", res);
      dispatch({
        type: GET_PROFILE_NFT_SUCCESS,
        data: res.data,
      });
    } catch (e) {
      dispatch({
        type: GET_PROFILE_NFT_FAILURE
      });
    }
  }
};


