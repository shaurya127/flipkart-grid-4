import React from 'react'
import Addcolab from '../../headers/addcolab'
import Bot from '../bot'
import './mint_nft_15.css'

function Mint_NFT_15() {
    return (
        <div>
            <Addcolab/><br/>
                <p className="autorize"> please authorize the transaction through your wallet.</p>
                <text className="click_here">click here. if you are not redirected to your wallet AUTOMATICALLY.</text>
            <Bot/>
            <view className="centr">
            <button className="butto" type="button">MINT MY NFT!</button>
            </view>
        </div>
    )
}

export default Mint_NFT_15
