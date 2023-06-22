import React, { useEffect, useState } from 'react';
import connectEthereum from './eth';
import MintForm from './components/MintForm';
import NFTDisplay from './components/NFTDisplay';

const App = () => {
  const [ethereum, setEthereum] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const connect = async () => {
      const eth = await connectEthereum();
      setEthereum(eth.provider);
      setContract(eth.contract);
    };
    
    connect();
  }, []);

  if (!ethereum) {
    return <div>Loading Ethereum...</div>;
  }

  return (
    <div>
      <h1>NFT App</h1>
      {contract && <MintForm contract={contract} />}
      {contract && <NFTDisplay contract={contract} />}
    </div>
  );
};

export default App;
