/* global chrome  */

import React from "react";
import axios from "axios";
import NFTCollection from "./NFTCollection.js";

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      nftData: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    chrome.storage.sync.get("address", (results) => {
      if (results.address) {
        this.setState({
          address: results.address,
        });
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const address = event.target.elements.address.value;
    this.setState({
      address,
    });
    this.fetchAssets(address);
  }

  fetchAssets(address) {
    axios
      .get(`https://mynft-api.herokuapp.com/assets/${address}`)
      .then((response) => {
        this.setState({
          nftData: response.data,
        });
        this.setWalletAddress();
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setWalletAddress() {
    chrome.storage.sync.set({ address: this.state.address });
  }

  render() {
    if (this.state.address != null) {
      this.fetchAssets(this.state.address);
    }
    return (
      <div>
        <form onSubmit={this.fetchAssets} className="addressform">
          <label className="h3" htmlFor="address">
            Wallet Address
          </label>
          <br />
          <input
            type="text"
            id="address"
            name="address"
            className="form-control mb-2"
            defaultValue={this.state.address}
            placeholder="Enter ETH Address"
          />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
        <NFTCollection data={this.state.nftData} />
      </div>
    );
  }
}

export default AddressForm;
