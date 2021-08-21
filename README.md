## Package Dependency

```
rroot@0c227cbd3cc5:/mnt/devroot/src/udacity-p6-nd1309-supplychain/project-6# truffle version
Truffle v4.1.14 (core: 4.1.14)
Solidity v0.4.24 (solc-js)

root@0c227cbd3cc5:/mnt/devroot/src/udacity-p6-nd1309-supplychain/project-6# cat package.json 
{
  "name": "supply-chain-E",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "lite-server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "pk <pkrasam@gmail.com> (https://ipfs.infura.io/ipfs/QmSXiR9Khm3yo1J67nUopvVBxFJ8YGN2fUGZ34Etr3m92x/)",
  "license": "MIT",
  "devDependencies": {
    "chai": "^4.3.4",
    "chai-as-promised": "^7.1.1",
    "lite-server": "2.4.0"
  },
  "dependencies": {
    "truffle-hdwallet-provider": "^1.0.17",
    "web3": "^1.3.4"
  }
}
```


# Supply chain & data auditing (on local chain)

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.


All '1. package dependencies' & '2. truffle compile/migrate/test' & '3. DApp screenshot' information are put at:

- [local blockchain runlog](./runlog/localchain/)



# Supply chain & data auditing (on public chain / rinkeby)

The coffee supply chain contract is uploaded to:

- [etherscan address for contact](https://rinkeby.etherscan.io/address/0x4fa13c42900fac0e113289cb77e3e6a4e92a0cd3)
- [etherscan address for transaction](https://rinkeby.etherscan.io/tx/0x07f8d1cc79082352d9cc3d1601c0b54df6ab7bf383b7d81e41e7049a9d1b8dc3)


Also, '1. package dependencies' & '2. truffle compile/migrate' information are put at:

- [public/rinkeby blockchain runlog](./runlog/publicchain-rinkeby/)
