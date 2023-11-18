import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import abi from "./contractJson/chai.json";
import Buy from './components/Buy';
import Memos from './components/Memos';
import './App.css'

function App() {
  const [state, setstate] = useState({
    provide: null,
    signer: null,
    contract: null
  })

  const [account, setAccount] = useState('Not Connected');

  useEffect(() => {
    const template = async() => {
      const contractAddress = "0x31A9B04Ba845A4e6C3F231c77857132198a174d9";
      const contractABI = abi.abi;

      try{
      const {ethereum} = window;
      const account = await ethereum.request({
        method: "eth_requestAccounts"
      })

      window.ethereum.on("accountChaged", () => {
        window.location.reload()
      })
      setAccount(account);
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )
      setstate({provider, signer, contract})

      } catch(error){
        alert(error);
      }

    }
    template();


  }, [])
  return (
    <>
    
  <div >

    <p style={{ marginTop: "10px", marginLeft: "5px" }}>
      <small>Connected Account - {account}</small>
    </p>
   
      <Buy state={state} />
      <Memos state={state} />
   
  </div>
    
    </>
  )
}

export default App
