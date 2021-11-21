import React from "react";

class NFT extends React.Component {

  render() {
    const nft = this.props.data;
    if (nft === undefined) {
      return <div></div>
    }
    let name = nft.name;
    if (nft.name === null || nft.name === "" || nft.name === undefined) {
      name = this.props.contractName;
    }
    const imageUrl = nft.imageUrl;
    const permaLink = nft.permaLink;

    return (
      <div className="nft">
        <h5>{name}</h5>
        <a href={permaLink} target="_blank" rel="noreferrer">
          <img src={imageUrl} alt={name} />
        </a>
      </div>
    );
  }
}

export default NFT;
