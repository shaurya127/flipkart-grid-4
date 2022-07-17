import React from 'react'
import './upload.css'

function upload() {
    return (
        <div>
            <view style={{ marginTop: 20}}>
                <view className="clickhere">
                    <text ><br/>ACCEPTABLE FORMATS: <br/> JPG. PNG. GIF. MP4.<br/> OBJ. AVI. TXT. PDF. TIFF</text>
                </view>
                <view className="clickhere uplod" >
                    <text><br/>file uploaded  <br/> successfully</text>
                </view>
                <view className="clickhere">
                    <text><br/>VIEW OUR GUIDELINES <br/> FOR CREATING NFTS</text>
                </view>
            </view>
            <view>
            <h2> What type of nft is this?</h2>
            <form className="uploadoc" action="/action_page.php" style={{display: 'inline-block'}} >
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label for="vehicle1"> collectible</label>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                <label for="vehicle2"> single edition</label>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                <label for="vehicle3"> multiple editions</label><br/>
            </form>
            </view>
            <br/>
            <h2>choose how you would like to list your nft</h2><br/>
            <h2> fixed price</h2>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label><br/>
            <h2>enter fixed price</h2><br/>
            <form action="/action_page.php" style={{color: 'white'}}>
                <input className="entertxtfill" type="text" id="fname" name="fname" value="enter price in eth"/><br/>
            </form>
            <h2> choose royalty %</h2><br/>
            <form action="/action_page.php" style={{color: 'white'}}>
                <input className="entertxtfill" type="text" id="fname" name="fname" value="enter royalty %"/><br/>
            </form>
            <button className="butto" type="button">NEXT PAGE</button>
        </div>
    )
}

export default upload
