import "./App.css";
import AddressForm from "./components/AddressForm.js";

function App() {
  return (
    <div className="App">
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
