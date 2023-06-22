import {ethers} from 'ethers';
import NFTContract from './NFT.json';
/* eslint-disable import/first */
const connectEthereum = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const network = await provider.getNetwork();
      const contractAddress = '0x82DA267AeDb4891C21b13CFFC792a77d23C530E9'; 
      const contract = new ethers.Contract(contractAddress, NFTContract.abi, signer);
      return { provider, signer, network, contract };
    } catch (error) {
      console.error('Connection failed', error);
    }
  } else {
    console.error('Ethereum not found.');
  }
};

export default connectEthereum;
