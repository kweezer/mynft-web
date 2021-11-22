import React from "react";
import NFT from "./NFT.js";

class NFTCollection extends React.Component {
  render() {
    const nftCollections = this.props.data;
    if (nftCollections === undefined) {
      return <div></div>;
    }
    return (
      <div className="nft-collection">
        {nftCollections.map((nftData, i) => (
          <div>
            <div className="contract-name text-start">
              <a
                href={nftData.contractUrl}
                className="h5 text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                {nftData.name}
              </a>
            </div>
            <div>
              {nftData.nfts.map((nft, i) => (
                <NFT data={nft} contractName={nftData.name} key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default NFTCollection;
