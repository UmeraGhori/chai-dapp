import { ethers } from "ethers"
import "./Buy.css";
const Buy=({state})=>{

    const buyChai = async(event)=>{
      event.preventDefault();
      const {contract}=state;
      const name = document.querySelector("#names").value;
      const message = document.querySelector("#message").value;
      //const amount = document.querySelector("#amount").value;
      const amount = {value:ethers.parseEther("0.001")}
      const transaction = await contract.buyChai(name,message,amount)
      await transaction.wait();
      alert("Transaction is successul");
      window.location.reload();
    }
    return  (
      <div className="center">
       <h1>Buy Tea</h1>
        <form onSubmit={buyChai}>
          <div className="inputbox">
            <input type="text" required="required" id="names" />
            <span>Name</span>
          </div>
          <div className="inputbox">
            <input type="text" required="required" id="message" />
            <span>Message</span>
          </div>
          <div className="inputbox">
            <input type="submit" value="Pay"  disabled={!state.contract}/>
          </div>
        </form>
          
        </div>
      );
}
export default Buy;