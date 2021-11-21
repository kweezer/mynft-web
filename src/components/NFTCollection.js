import React from "react";
import NFT from "./NFT.js";

class NFTCollection extends React.Component {

  render() {
    const nftCollections = this.props.data;
    if (nftCollections === undefined) {
      return <div></div>
    }
    return (
      <div className="nft-collection">
        {nftCollections.map((nftData, i) => (
          <div>
            <h3>{nftData.name}</h3>
            {nftData.nfts.map((nft, i) => (
              <NFT data={nft} key={i} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default NFTCollection;
