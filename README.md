# Supply chain & data auditing (on local chain)

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The 'DApp User Interface' when running should look like...

- [DApp FE on local chain](./runlog/localchain/)

The 'truffle test log' when running should look like...

- [truffle test on local chain](./runlog/localchain/)


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

# Supply chain & data auditing (on public chain / rinkeby)

TODO:
- [etherscan address for contact]()
- [etherscan address for transaction]()

