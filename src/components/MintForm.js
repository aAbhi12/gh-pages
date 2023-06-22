import React, { useState } from 'react';

const MintForm = ({ contract }) => {
  const [tokenURI, setTokenURI] = useState('');
  const [mintingStatus, setMintingStatus] = useState('');

  const handleMint = async () => {
    try {
      setMintingStatus('Minting in progress...');
      const tx = await contract.mintNFT(window.ethereum.selectedAddress, tokenURI);
      await tx.wait();
      setMintingStatus('Minting successful!');
    } catch (error) {
      console.error('Failed to mint NFT:', error);
      setMintingStatus('Minting failed.');
    }
  };

  return (
    <div>
      <h2>Mint NFT</h2>
      <input
        type="text"
        placeholder="Enter Token URI"
        value={tokenURI}
        onChange={(e) => setTokenURI(e.target.value)}
      />
      <button onClick={handleMint}>Mint</button>
      {mintingStatus && <p>{mintingStatus}</p>}
    </div>
  );
};

export default MintForm;
