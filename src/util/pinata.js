require('dotenv').config();
const key = '8afd7e928a20fcb2f70b';
const secret = 'cab8f89d1cd01308867d13bbea01b2742f03969b3bf1c8e0e3d0d9223d1d1d67';
const axios = require('axios');

export const pinJSONToIPFS = async(JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    return axios
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            }
        })
        .then(function (response) {
           return {
               success: true,
               pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
           };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error,
            }
           
        });
};


