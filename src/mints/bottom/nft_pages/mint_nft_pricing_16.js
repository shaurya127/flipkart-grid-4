import React from 'react'
import Addcolab from '../../headers/addcolab'
import Bot from '../bot'
import './mint_nft_pricing_page.css'

function mint_nft_pricing_16() {
    return (
        <div>
            <Addcolab/><br/>
                <view className="row creator">
                    <view className="centro">
                    <form>  
                        Name of the creator<br/> 
                        <textarea className="txt_box" rows="1" value="LZY LAD" cols="20"></textarea>  
                    </form>  
                    <form style={{marginLeft: 20}}> 
                            Role<br/>  
                        <textarea className="txt_box" rows="1" value="visual artist" cols="20"></textarea>  
                    </form>  
                    <form>  
                            ROYALTY SPLIT %<br/>  
                        <textarea className="txt_box" rows="1" value="enter a %" cols="20"></textarea>  
                    </form>
                    </view> 
                    <view className="centro" style={{ marginTop: 0}}>
                    <form> 
                        <textarea className="txt_box" rows="1" value="Noriko shakti" cols="20"></textarea>  
                    </form>  
                    <form style={{marginLeft: 20}}> 
                        <textarea className="txt_box" rows="1" value="music producer" cols="20"></textarea>  
                    </form>  
                    <form>   
                        <textarea className="txt_box" rows="1" value="enter a %" cols="20"></textarea>  
                    </form>
                    </view> 
                </view><br/>
                <p className="autorize"> please authorize the transaction through your wallet.</p>
                <text className="click_here">click here. if you are not redirected to your wallet AUTOMATICALLY.</text>
            <Bot/>
            <view className="centr">

            <button className="butto" type="button">+ Add more collaborators</button>
            </view>
        </div>
    )
}

export default mint_nft_pricing_16
