import React from "react";
import axios from "axios";
import NFTCollection from "./NFTCollection.js";

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nftData: undefined,
    };
    this.fetchAssets = this.fetchAssets.bind(this);
  }

  fetchAssets(event) {
    event.preventDefault();
    const address = event.target.elements.address.value;
    axios
      .get(`https://mynft-api.herokuapp.com/assets/${address}`)
      .then((response) => {
        this.setState({
          nftData: response.data,
        });
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.fetchAssets}>
          <label htmlFor="address">Wallet Address</label>
          <br />
          <input
            type="text"
            id="address"
            name="address"
            defaultValue="0xedc3eb734f9d433f3ce1f5a4a0270f7054661063"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <NFTCollection data={this.state.nftData} />
      </div>
    );
  }
}

export default AddressForm;
