import { ethers } from "ethers";
import config from "../../config";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const WALLET_LOADING = "WALLET_LOADING";
export const TOGGLE_POPUP = "TOGGLE_POPUP";
export const FETCH_ORDER = "FETCH_ORDER";
export const ADD_ORDER = "ADD_ORDER";
export const ERROR = "ERROR";
export const UPDATE_WALLET = 'UPDATE_WALLET';





export const toggleWalletPopup = () => {
  return  (dispatch) => {
    dispatch({
      type: TOGGLE_POPUP,
    });
  };
};

export const addMetamask = () => {
  return  async (dispatch) => {
      try {
        if (window.ethereum) {
          //@ts-ignore
          window.ethereum.enable().then(async () =>{
            const metamaskProvider = new ethers.providers.Web3Provider(
              window.ethereum
            );
            const network = await metamaskProvider.getNetwork();
            const onCorrectNetwork = network.chainId === 4;
            if (!onCorrectNetwork) {
              try {

                console.log(config)
                await window.ethereum.request({
                  method: 'wallet_switchEthereumChain',
                  params: [{ chainId: config.networkSpec.chainId }],
                });
              } catch (switchError) {
                console.log(switchError)
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                 
                }else{
                  dispatch({
                    type : ERROR,
                    ErrorText : switchError});
                }
              }
            } 
              const wallet = await metamaskProvider.getSigner();
              const address = await wallet.getAddress();
              wallet.address = address;
              console.log("Address :", address);
              window.wallet = wallet;
              dispatch({
                type : UPDATE_WALLET,
                wallet : wallet
              })
            
          });
          
        }
      } catch (error) {
        console.log(error);
        dispatch({
          type : ERROR,
          ErrorText : error});
      }
    };
};

export const addWalletConnect = () => {
  return  async (dispatch) => {
    try {
      const walletConnectProvider = new WalletConnectProvider({
        rpc: { 4: "https://mainnet.eraswap.network" },
        infuraId: "b81341e3ab894360a84f3fa640ab985e" ,
        qrcode: true,
      });
      await walletConnectProvider.enable();
      const provider = new ethers.providers.Web3Provider(walletConnectProvider);
      console.log(provider.getSigner());
      const wallet = await provider.getSigner();
      const address = await wallet.getAddress();
      wallet.address = address;
      window.wallet = wallet; 
      dispatch({
        type : UPDATE_WALLET,
        wallet : wallet
      })
    } catch (e) {
      dispatch({
        type : ERROR,
        ErrorText : e});
      }
  }     
}
