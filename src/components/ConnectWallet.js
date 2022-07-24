import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { addMetamask, addWalletConnect, toggleWalletPopup } from "../store";


export default function ConnectWallet() {
  // const [show, setShow] = useState(false);
  const walletStore =  useSelector(state => state.wallet)

  console.log(walletStore);
 const dispatch = useDispatch()

  const handleToggle = () => {dispatch(toggleWalletPopup())};
  
  useEffect(() => {
    if(window.ethereum && walletStore.wallet) {
      window.ethereum.on('accountsChanged', () => {
        dispatch(addMetamask());
      })
    }
    
  }, []);

  return (
    <>
    <div>
    <Modal
        show={walletStore.isWalletModelOpen}
        onHide={handleToggle}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header closeButton>
          <Modal.Title style={{color:'#000',marginLeft:"100px",marginRight:"auto",justifyContent:"center"}}>Connect to a Wallet</Modal.Title>
        </Modal.Header>
        {walletStore.Error && <div className="alert alert-danger m-3" role="alert">{walletStore.Error}</div>}
        <Modal.Body>
          <div className="walletCard d-flex justify-content-between" onClick={() => {dispatch(addMetamask())}} style={style.Card} >
            <div style={style.cardText}>MetaMask</div>
            <img width="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png" alt="metamsk" />
          </div>
          <div className="walletCard d-flex justify-content-between" onClick={() => {dispatch(addWalletConnect())}} style={style.Card} >
            <div style={style.cardText}>WalletConnect</div>
            <img width="50px" src="https://avatars0.githubusercontent.com/u/37784886" alt="walletconnect" />
          </div>
        </Modal.Body>

      </Modal>
    </div>

    </>
  );

}

const style = {
  Card : {
    border: "1.5px solid rgb(0, 0, 0)",
    borderRadius : "10px",
    width : "100%",
    padding: "10px 20px",
    margin: "3px",
    marginBottom:"10px"


  },
  cardText : {
    fontSize : "15px",
    fontWeight : "400",
    color : "black",
    marginTop : "auto",
    marginBottom : "auto",
  }
}