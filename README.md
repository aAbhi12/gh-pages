# gh-pages
Hi team
I've tried my best and have implemented most of the code. Here I'm providing my best approach and methodology through which I perform the task. Although I'm getting some errors but yes still I'm trying after submiting this code.
I can explain my code and approach in meeting as well if required.
1. With the help of openzeppelin, I created an ERC721 token which have features like minting  and auto increment id(s).
2. Opened this projject in remix and then compile the contract after which we get ABI.
3. I created a new file NFT.json in my react application and pasted this ABI in it.
4. After the successful compilation, we will deploy our contract on polygon testnet network
5. here I have used the mumbai chain region because we get fund for goerli testnet only when we have mainnet fund.
6. The doc I followed is https://wiki.polygon.technology/docs/develop/remix/.
7. We also need metamask wallet so its connfiguration I have done.
8. We need to refresh remix IDE to connect with wallet.  
9. Now, as I've created our react application. Here we need to install the etherejs.
10. several libraries, dependencies and modules we need to install like truffle, gh-pages, openzeppelin contracts, etc.
11. In our contract, we have our react application live link that we've deployed on github pages and aslo tokenId which will increment automatically.
12. Now we'll create a new file eth.js where we'll create the instances and write ethereum provider.
13. Since we've deployed our contract after compiling so we've deployed contract address whi we'll paste in the eth.js file in address section.
14. again I have created two components in react, one is to display the details of NFT and another is for minting details.
15. Similarly, we need to make changes in App.js file also.

Errors that I'm facing---->
1. In verifying the contract
2. some provider error I'm facing on running npm start.

Sources used:
1. Polygon docs
2. GitHub

NOTE:- I've also shared some screenshots of my work in the code.
![1  Contract Compilation](https://github.com/aAbhi12/gh-pages/assets/69293488/30cbaf89-064b-42a4-b6a9-e0d16d12135d)
![2  Contract Deployed](https://github.com/aAbhi12/gh-pages/assets/69293488/5e90dd17-dfd2-414c-8771-96e31fd8e7ac)
![3  Live deployed address](https://github.com/aAbhi12/gh-pages/assets/69293488/9a60b335-1de7-477c-9ac7-f689bac4164a)
![4  openzeppelin](https://github.com/aAbhi12/gh-pages/assets/69293488/014f2512-6048-4594-b3cc-30e8de1b70b3)
![5  Live app on gh-pages](https://github.com/aAbhi12/gh-pages/assets/69293488/3b02a79e-3560-4fff-8df2-8cd52ed1a412)
![6  MetaMask Wallet](https://github.com/aAbhi12/gh-pages/assets/69293488/2fb6ad21-6e9d-4e42-b14b-21f50f11bb79)
![7  Error I'm facing](https://github.com/aAbhi12/gh-pages/assets/69293488/e096e076-c9ab-47f4-9a58-27f4abd623ac)

I've tried my best to perform the task and still trying. Please consider my application if I fit for this internship position.
Thank you
