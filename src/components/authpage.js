import { useState } from "react";
import { ethers } from "ethers";
import { Provider } from "web3modal";
export default function AuthPage(){
    const [loginstate,setloginstate]=useState();

    const login = async () => {
        setloginstate("connecting to your wallet");
        if(!window.ethereum){
            setloginstate("No metamask wallet... ");
            return;
        }
        const provider=new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth-requestAccount",[]);
        const signer=provider.getSigner();
        const walletAddr=await signer.getAddress();
        console.log("walletAddr",walletAddr);

        const response=await fetch("api/auth/nonce",{
            method:"POST",
            body:JSON.stringify({
                walletAddr,
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data=response.JSON();
        console.log("data from backend",data);

        // const signature=await signer.signMessage("hello world");
        // console.log(signature);

    }
    return (
        <div>
            <p>{loginstate}</p>

            <button> Sign in with Metamask</button>
        </div>
        
    )
}