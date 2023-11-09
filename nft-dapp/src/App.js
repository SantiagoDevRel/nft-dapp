import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Web3 from "web3";
import env from "react-dotenv";
import ABI from "./artifacts/contracts/Lock.sol/Lock.json";

let contract = {},
  account0 = "";

async function connectWallet() {
  try {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      //request accounts (connect metamask)
      await window.ethereum.send("eth_requestAccounts");

      //return array with the connected accounts from metamask
      //store the first account
      const accounts = await web3.eth.getAccounts();

      account0 = accounts[0];
      //print wallet in front-end
      document.getElementById("wallet-address").textContent = account0;

      //initialize contract
      contract = new web3.eth.Contract(ABI, "0x5FbDB2315678afecb367f032d93F642f64180aa3");
      console.log("CONTRACT", contract.methods.cost().call());
    }
  } catch {}
}

async function mint() {
  //const nftPrice = Number(await contract.methods.cost().call());
  //console.log("REMOVE-nftPrice", nftPrice);
  //mint nft
  //const tx = await contract.methods.safeMint(account0, _amountToMint).send({from: account0, value: String(_totalAmount)});
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <form className="main_container color_text col-lg-5 mt-5">
            <h4>Mint Portal</h4>
            <h5>Please connect your wallet</h5>
            <Button style={{ marginBottom: "3px" }} onClick={() => connectWallet()}>
              Connect wallet
            </Button>
            <div className="card" style={{ marginTop: "3px", boxShadow: "1px 1px 5px #000000", background: "#ffffff72" }}>
              <label htmlFor="floatingInput" id="wallet-address">
                Wallet address
              </label>
              <Button onClick={() => mint()}>Mint</Button>
            </div>
            <label>Price 0.6(connect to contract) ETH each mint</label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
