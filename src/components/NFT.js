import React from "react";

class NFT extends React.Component {

  render() {
    const nft = this.props.data;
    if (nft === undefined) {
      return <div></div>
    }
    const name = nft.name;
    const imageUrl = nft.imageUrl;
    const permaLink = nft.permaLink;

    return (
      <div className="nft">
        <h3>{name}</h3>
        <a href={permaLink} target="_blank" rel="noreferrer">
          <img src={imageUrl} alt={name} />
        </a>
      </div>
    );
  }
}

export default NFT;
