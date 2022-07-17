import axios from 'axios';
import {
  FETCH_ITEM_METADATA_INITIAL, FETCH_ITEM_METADATA_SUCCESS, FETCH_ITEM_METADATA_FAILURE,
  FETCH_BID_INITIAL, FETCH_BID_SUCCESS, FETCH_BID_FAILURE, PLACE_BID_INITIAL, PLACE_BID_FAILURE, PLACE_BID_SUCCESS,
  FETCH_NFT_PRICE_INITIAL, FETCH_NFT_PRICE_SUCCESS, FETCH_NFT_PRICE_FAILURE,
}
  from './constant';
import { _getBids, _createBid } from '../../api/nft.api.js';



const apiKey = '2Zm5wkjGQ-C6p3FjMYs5f_SJuvgW7rdY';
const MORALIS_API_KEY = 'ElMD1BX3aHki68CAPToKw00tx6W6JdEDru1JAH0NMl2KXGPsEylGW1DetmpGpnip';
const CHAIN = 'eth';
const MARKET_PLACE = 'opensea';

export const fetchItemMetaData = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_ITEM_METADATA_INITIAL,
      });
      const { collection, id } = payload || null;
      const res = await axios.get('https://deep-index.moralis.io/api/v2/nft/' + collection + '/' + id + `?chain=${CHAIN}`,
        { 'headers': { "X-API-Key": MORALIS_API_KEY } });
      dispatch({
        type: FETCH_ITEM_METADATA_SUCCESS,
        payload: { ...res.data, ...JSON.parse(res.data.metadata) }
      })
      console.log('this is the collection id', collection, id)
      const priceUrl = 'https://deep-index.moralis.io/api/v2/nft/' + collection + '/lowestprice?chain=eth&marketplace=opensea';
      console.log(priceUrl, 'this is the price url');
      const price = await axios.get(priceUrl,
        { 'headers': { "X-API-Key": MORALIS_API_KEY } });
      console.log('price is dispatched', price);
    } catch (e) {
      dispatch({
        type: FETCH_ITEM_METADATA_FAILURE,
        payload: e,
      })
    }
  }
}


export const getNftById = (payload) => {
  return async (dispatch) => {
    const ownerAddr = payload.ownerAddr || null;
    const tokenId = payload.tokenId || 1;
    try {
      dispatch({
        type: FETCH_ITEM_METADATA_INITIAL,
      });

      const res = await axios.get(`https://eth-mainnet.alchemyapi.io/v2/${apiKey}/getNFTMetadata/?contractAddress=${ownerAddr}&tokenId=${tokenId}`);
      console.log(res);
      dispatch({
        type: FETCH_ITEM_METADATA_SUCCESS,
        payload: res.data
      });
    }
    catch (e) {
      dispatch({
        type: FETCH_ITEM_METADATA_FAILURE
      });
    }
  }
}


//
// export const fetchNftPrice = (payload) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: FETCH_NFT_PRICE_INITIAL,
//       })
//     } catch (e) {
//
//     }
//   }
// }

export const fetchOngoingBids = (payload) => {
  return async (dispatch) => {
    try {
      const { tokenId } = payload || null;
      console.log(tokenId, 'this is the token id');
      dispatch({
        type: FETCH_BID_INITIAL,
      });
      const data = await _getBids({ tokenId: 'trialToken' });
      console.log('on going bids fetched', data);
      dispatch({
        type: FETCH_BID_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: FETCH_BID_FAILURE,
        payload: e,
      });
    }
  }
}

export const placeBid = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: PLACE_BID_INITIAL,
      })
    } catch (e) {
      dispatch({
        type: PLACE_BID_FAILURE,
      })
    }
  }
}
