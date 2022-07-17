import React from 'react'
import addcolab from '../../headers/addcolab'
import Bot from '../bot'

import './mint_nftt_single_auction.css'
import img2 from './upload.png'
import img1 from './tick.png'

function mint_nftt_single_auction() {
    return (
        <div>
            <view className="cener" style={{ marginTop: 20}}>
                <view className="clickhere cener">
                    <text ><br/>ACCEPTABLE FORMATS: <br/> JPG. PNG. GIF. MP4.<br/> OBJ. AVI. TXT. PDF. TIFF</text>
                </view>
                <view className="clickhere uplod cener" >
                    <img1/>
                    <text><br/>CLICK HERE TO <br/> UPLOAD A FILE<br/> OR <br/> DROP A FILE HERE</text>
                </view>
                <view className="clickhere cener">
                    <img2/>
                    <text><br/>VIEW OUR GUIDELINES <br/> FOR CREATING NFTS</text><br/>
                </view>
            </view><br/>
            <h2>what type of nft is this?</h2>
            <form className="uploadoc" action="/action_page.php" style={{display: 'inline-block'}} >
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label for="vehicle1"> collectible</label>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                <label for="vehicle2"> single edition</label>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                <label for="vehicle3"> multiple editions</label>
            </form><br/>
            <h2 style={{marginBottom: 50}}>choose how you would like to list your nft</h2>
            <view className="row" style={{marginLeft: 150}}>
                <text className="heading" >fixed price</text>
                <label className="switch" > 
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                    <text className="heading" >auction</text>
                </label>
            </view><br/>
            <h2> enter starting bid</h2>
            <view className="cener">
            <input className="boxview" value="enter price in eth" type="text" id="fname" name="fname"/>
            </view>
            <h2> choose royalty %</h2>
            <view className="cener">
            <input className="boxview" value="enter royalty %" type="text" id="fname" name="fname"/>
            </view>
            <h2 style={{marginTop: 50}}> choose bid starting and ending date & time</h2>
            <view>
                <input className="boxdate" value="start date" type="text" id="fname" name="fname"/>
                <input className="boxdate" style={{width: 80, marginLeft: 30}} value="time" type="text" id="fname" name="fname"/>
            </view>
            <view>
                <input className="boxdate" style={{marginLeft: 280}} value="end date" type="text" id="fname" name="fname"/>
                <input className="boxdate" style={{width: 80, marginLeft: 30}} value="time" type="text" id="fname" name="fname"/>
            </view>
            <br/>
            <Bot/>
            <view className="cener">
                <button className="butto" type="button">NEXT PAGE &gt;</button>  
            </view>
        </div>
    )
}

export default mint_nftt_single_auction
