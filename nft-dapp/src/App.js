import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <form class="main_container color_text col-lg-5 mt-5">
            <h4>Mint Portal</h4>
            <h5>Please connect your wallet</h5>
            <Button style={{ marginBottom: "3px" }}>Connect wallet</Button>
            <div class="card" id="wallet-address" style={{ marginTop: "3px", boxShadow: "1px 1px 5px #000000", background: "#ffffff72" }}>
              <label for="floatingInput">Wallet address</label>
              <input type="number" name="amount" defaultValue="1" min="1" max="5" style={{ background: "#ffffff72" }}></input>
              <label>Please select the amount to mint</label>
              <Button>Mint</Button>
            </div>
            <label>Price 0.6 ETH each mint</label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
