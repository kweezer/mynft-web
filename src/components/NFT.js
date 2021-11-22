import React from "react";

class NFT extends React.Component {
  render() {
    const nft = this.props.data;
    if (nft === undefined) {
      return <div></div>;
    }
    const imageUrl = nft.imageUrl;
    const permaLink = nft.permaLink;

    return (
      <div className="nft">
        <a href={permaLink} target="_blank" rel="noreferrer" className="text-decoration-none font-weight-bold">
          <p className="text-dark">{nft.name}</p>
        </a>
        <a href={permaLink} target="_blank" rel="noreferrer">
          <img src={imageUrl} alt={nft.name} />
        </a>
      </div>
    );
  }
}

export default NFT;
