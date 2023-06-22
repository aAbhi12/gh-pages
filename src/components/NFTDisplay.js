import React, { useEffect, useState } from 'react';

const NFTDisplay = ({ contract }) => {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      const totalSupply = await contract.totalSupply();
      const nftPromises = [];
      for (let i = 0; i < totalSupply; i++) {
        const tokenId = await contract.tokenByIndex(i);
        const tokenURI = await contract.tokenURI(tokenId);
        nftPromises.push(fetch(tokenURI).then((response) => response.json()));
      }
      const nfts = await Promise.all(nftPromises);
      setNFTs(nfts);
    };

    fetchNFTs();
  }, [contract]);

  return (
    <div>
      <h2>NFTs</h2>
      {nfts.map((nft, index) => (
        <div key={index}>
          <h3>{nft.name}</h3>
          <p>{nft.description}</p>
          <img src={nft.image} alt={nft.name} />
        </div>
      ))}
    </div>
  );
};

export default NFTDisplay;
