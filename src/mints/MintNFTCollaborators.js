import React from 'react'
import './mintNftcolla.css'

function MintNFTCollaborators() {
    return (
        <div >
            <view className="row">
            <label className="switch" >
                <input type="checkbox"/>
                <span className="slider round"></span>
                <text style={{marginLeft: 60}}>ADD COLLABORATORS / CO-CONTRIBUTORS</text>
            </label><br/>
            </view>
            <view className="row">
               <form>  
                       1 Name of the creator<br/>  
                    <textarea rows="2" value="start with @" cols="20"></textarea>  
                </form>  
                <form>  
                        Role<br/>  
                    <textarea rows="2" value="specify a role" cols="20"></textarea>  
                </form>  
                <form>  
                        ROYALTY SPLIT %<br/>  
                    <textarea rows="2" value="enter a %" cols="20"></textarea>  
                </form> 
            </view><br/>
                <button className="addmore" type="button">+ Add more collaborators</button> 
        </div>
    )
}

export default MintNFTCollaborators
