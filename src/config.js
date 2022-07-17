//export const nftmarketaddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
//export const nftaddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
export const nftmarketaddress = "0xed7ffF856756cd27fee101D486f23553e8e24EaA"
export const nftaddress = "0x5d10fD561A8Ff2fb1ad67dC209fFB49838EBD63B"
export const polygonweth = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"

const config = {
  dev : {
   networkSpec : {
    chainId: "0x4",
    chainName: "Ethereum Network Rinkeby",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18 //In number form
    },
    rpcUrls: ['https://rinkeby.infura.io/v3/b81341e3ab894360a84f3fa640ab985e'],
    blockExplorerUrls: ["https://rinkeby.etherscan.io"]
   },
   RPC_URL: 'https://rinkeby.infura.io/v3/b81341e3ab894360a84f3fa640ab985e',
   nftmarketaddress : "0xed7ffF856756cd27fee101D486f23553e8e24EaA",
   nftaddress : "0x5d10fD561A8Ff2fb1ad67dC209fFB49838EBD63B",
   polygonweth : "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
  },
  prod : {
    RPC_URL: 'https://polygon-mainnet.g.alchemy.com/v2/bv51--wKZGYGrXlqxnqJ_rRdz6cR5t-4',
    nftmarketaddress : "0xed7ffF856756cd27fee101D486f23553e8e24EaA",
    nftaddress : "0x5d10fD561A8Ff2fb1ad67dC209fFB49838EBD63B",
    polygonweth : "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
   }
}

export default process.env.REACT_APP_NODE !== 'production' ? config["dev"] : config["prod"];