/* global chrome  */

import React from "react";
import axios from "axios";
import NFTCollection from "./NFTCollection.js";

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      showLoading: false,
      nftData: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchStoredAddress();
  }

  fetchStoredAddress() {
    chrome.storage.sync.get("address", (results) => {
      const address = results.address;
      if (address) {
        const isLoading = this.state.showLoading;
        if (
          !isLoading &&
          address !== null &&
          address !== "" &&
          address !== undefined
        ) {
          this.fetchAssets(address);
        }
        return results.address;
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const address = event.target.elements.address.value;
    this.fetchAssets(address);
  }

  fetchAssets(address) {
    this.setState({
      showLoading: true,
      nftData: undefined,
    });
    axios
      .get(`https://mynft-api.herokuapp.com/assets/${address}`)
      .then((response) => {
        this.setState({
          nftData: response.data
        });
        return response.data;
      })
      .catch((error) => {
        this.setState({
          nftData: undefined
        });
        console.log(error);
      }).finally(f => {
        this.storeWalletAddress(address);
        this.setState({
          showLoading: false
        })
      });
  }

  storeWalletAddress(address) {
    if (address !== this.state.address) {
      this.setState({
        address,
      });
      chrome.storage.sync.set({ address });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="addressform">
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
        <div className={"d-flex justify-content-center"}>
          <div
            className={
              "spinner-border" + this.state.showLoading
                ? "visible"
                : "invisible"
            }
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <NFTCollection data={this.state.nftData} />
      </div>
    );
  }
}

export default AddressForm;
