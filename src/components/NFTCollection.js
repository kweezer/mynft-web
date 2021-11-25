import React from "react";
import NFT from "./NFT.js";

class NFTCollection extends React.Component {
  render() {
    const nftCollections = this.props.data;
    if (!Array.isArray(nftCollections)) {
      return <h5>No result found</h5>;
    }
    return (
      <div className="nft-collection">
        {nftCollections.map((nftData, i) => (
          <div>
            <div className="contract-title text-start">
              <a
                href={nftData.contractUrl}
                className="h5 text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                <img className="contract-image me-2" src={nftData.contractImageUrl} alt={nftData.name} />
                {nftData.name}
              </a>
            </div>
            <div>
              {nftData.nfts.map((nft, i) => (
                <NFT data={nft} contractName={nftData.name} key={i} />
              ))}
            </div>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default NFTCollection;
