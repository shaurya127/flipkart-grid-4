import axios from 'axios';
import { BASE_URL } from './util.js';


// to get all current bids
export const _getBids = async (payload) => {
  const { tokenId } = payload;
  const res = await axios({
    method: 'get',
    url: `${BASE_URL}/api/offer/get-bids/${tokenId}`,
  });
  return res;
}


// to create a bid
export const _createBid = async (payload) => {
  const { data, tokenId } = payload;
  const res = await axios({
    method: 'post',
    url: `${BASE_URL}/api/offer/create-bid/${tokenId}`,
    data: data
  });
  return res;
}

// to list NFT for a sale
export const _listForSell = () => {

}
