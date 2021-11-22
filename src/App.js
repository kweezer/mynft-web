import "./App.css";
import AddressForm from "./components/AddressForm.js";
import Logo from "./mynfts-250.png"

function App() {
  return (
    <div className="App">
      <img src={Logo} alt="mynfts logo"/>
      <AddressForm />
      <small className="feedback">
        Share your feedback&nbsp;
        <a href="https://twitter.com/ikweezer" target="_blank" rel="noreferrer">
          @ikweezer
        </a>
      </small>
    </div>
  );
}

export default App;
