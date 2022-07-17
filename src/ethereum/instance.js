import { ethers } from 'ethers';
import Marketplace from './Marketplace.json';
import NFT from './NFT.json';
import MockERC20 from './MockERC20.json';

// window.provider = new ethers.providers.InfuraProvider("rinkeby", "b81341e3ab894360a84f3fa640ab985e")
window.provider = new ethers.providers.JsonRpcProvider(
  `https://polygon-mainnet.g.alchemy.com/v2/bv51--wKZGYGrXlqxnqJ_rRdz6cR5t-4`
);

window.marketInst = new ethers.Contract('0xed7ffF856756cd27fee101D486f23553e8e24EaA', Marketplace.abi, window.provider);
window.nftInst = new ethers.Contract('0x5d10fD561A8Ff2fb1ad67dC209fFB49838EBD63B', NFT.abi, window.provider);
window.ercInst = new ethers.Contract('0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', MockERC20.abi, window.provider);