import React from "react";
import { useParams } from "react-router-dom";


const Profile= () =>{
    const {addr} =useParams()
    console.log(addr)
    return(<div style={{color:"white",}}>
    My profile is {addr}
    </div>)
}

export default Profile;