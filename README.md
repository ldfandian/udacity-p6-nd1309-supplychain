## 1. UML Diagram


See the UML diagram here:
- [UML Diagram](./uml-diagram/)



## 2. Package Dependency (aka. Dev Environment Setup)

### 2.1 about Truffle version

Note: The code is written for Solidity v0.4.24. At the time of writing, the current Truffle v5 comes with Solidity v0.5 that requires function mutability and visibility to be specified (please refer to Solidity documentation for more details). To use this starter code, please run npm i -g truffle@4.1.14 to install Truffle v4 with Solidity v0.4.24.


### 2.2 about dev environment setup

```bash
root@0c227cbd3cc5:/mnt/devroot/src/udacity-p6-nd1309-supplychain/project-6# rm -rf node_modules/
<...>

root@0c227cbd3cc5:/mnt/devroot/src/udacity-p6-nd1309-supplychain/project-6# npm install -g truffle@4.1.14
npm WARN deprecated mkdirp@0.5.1: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)
/usr/local/bin/truffle -> /usr/local/lib/node_modules/truffle/build/cli.bundled.js
+ truffle@4.1.14
added 84 packages from 318 contributors and updated 1 package in 9.452s

root@0c227cbd3cc5:/mnt/devroot/src/udacity-p6-nd1309-supplychain/project-6# npm install
<...>

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
    "web3": "1.2.1"
  }
}

```

### 2.3 about library

- truffle-hdwallet-provider: the HD wallet provider to connect public testnet (rinkeby)
- chai & chai-as-promised: better test utils methods (especially for negative test, like assert.isRejected)
- lite-server: a lightweight http server to host front end DApp
- IPFS: the package is not used, since I don't implement the optional product image upload task


## 3. Runing the project

For running 'Supply Chain frond end Dapp', please run from the terminal, inside the project folder:

```bash
npm run dev
```

Then allow metamask permission and connect to the Local Blockchain / Public Rinkeby Testnet Blockchain.



# 4. Supply chain & data auditing (on local chain)

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.


All '1. package dependencies' & '2. truffle compile/migrate/test' & '3. DApp screenshot' information are put at:

- [local blockchain runlog](./runlog/localchain/)

```bash
root@0c227cbd3cc5:/mnt/devroot/src/udacity-p6-nd1309-supplychain/project-6# truffle compile
Compiling ./contracts/Migrations.sol...
Compiling ./contracts/coffeeaccesscontrol/ConsumerRole.sol...
Compiling ./contracts/coffeeaccesscontrol/DistributorRole.sol...
Compiling ./contracts/coffeeaccesscontrol/FarmerRole.sol...
Compiling ./contracts/coffeeaccesscontrol/RetailerRole.sol...
Compiling ./contracts/coffeeaccesscontrol/Roles.sol...
Compiling ./contracts/coffeebase/SupplyChain.sol...
Compiling ./contracts/coffeecore/Ownable.sol...
Writing artifacts to ./build/contracts

root@0c227cbd3cc5:/mnt/devroot/src/udacity-p6-nd1309-supplychain/project-6# truffle migrate
Using network 'development'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0x57935ece60ce3771b482dfc05459c4bc3eff082b6daf2f1642aef56b9775e0da
  Migrations: 0x1b8c8c10f000145cf57cd4a4c7d42a4ff8a71aa2
Saving successful migration to network...
  ... 0x5e19bdeb124cf99c5c56170cc91ab75a8afa166e60aa48b4c7ee6890bb87a075
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying FarmerRole...
  ... 0xd7e72daca6c76d808f084b62a74e799192dd05e22972bbe4fdbf2fd8d3911692
  FarmerRole: 0xdfdf4631fc192e2a7a9c4eafc105f4df898e6eee
  Deploying DistributorRole...
  ... 0xb10cee599aea5c0a04ca6e6a98c6bb70a0f7827e4a648eac30e8fda3d1026b53
  DistributorRole: 0x86b7ba214ff338c5f9e09bf963c26259da4e1403
  Deploying RetailerRole...
  ... 0xd1e5e0f406b7a4b27c9343ac73bef2fc3f83a564b1e92897af119f5eef483aad
  RetailerRole: 0x90275ee10b061d8c6420731bd110f51479403b90
  Deploying ConsumerRole...
  ... 0x749984a0842e8bb499b8fd5caa5e235179ec6f9d4eb312237df4bd8aed212ae1
  ConsumerRole: 0x8b516aefdd9c150dda233b78e819c1525427fde1
  Deploying SupplyChain...
  ... 0x43db941838b46082d53693c1685595758342b0ebda29d2350a78f53ba23191d1
  SupplyChain: 0x372695bebee3f96062634a459cf855aa5fb56f72
Saving successful migration to network...
  ... 0xb8deddca9f044b2acbd7874fa0c8b99ac73783276ccb2f1a22216bbf22599373
Saving artifacts...
root@0c227cbd3cc5:/mnt/devroot/src/udacity-p6-nd1309-supplychain/project-6# truffle test   
Using network 'development'.

ganache-cli accounts used here...
Contract Owner: accounts[0]  0xf1ee211e9fc527a80f71e25ee9ad46034709708c
Farmer 1: accounts[1]  0x1f06213cc4e5b76210d44ba16a4f4d28f9cf2071
Farmer 2: accounts[5]  0xa68d858c0bb3c884ade02b7daf1bf63533d1bb05
Distributor: accounts[2]  0xab62f51fb3df7f4e6b04dd04a341dbdd7c01bc69
Retailer: accounts[3]  0x1898b41e5393f5fbfd3c2966a9d1096e85d27e31
Consumer: accounts[4]  0xa8931db2228500ed19682c91f65c110c5e4bf38b


  Contract: SupplyChain
    ✓ Testing smart contract function harvestItem() that allows a farmer to harvest coffee (3826ms)
    ✓ Testing smart contract function processItem() that allows a farmer to process coffee (518ms)
    ✓ Testing smart contract function packItem() that allows a farmer to pack coffee (1380ms)
    ✓ Testing smart contract function sellItem() that allows a farmer to sell coffee (1393ms)
    ✓ Testing smart contract function buyItem() that allows a distributor to buy coffee (1473ms)
    ✓ Testing smart contract function shipItem() that allows a distributor to ship coffee (1424ms)
    ✓ Testing smart contract function receiveItem() that allows a retailer to mark coffee received (1457ms)
    ✓ Testing smart contract function purchaseItem() that allows a consumer to purchase coffee (1427ms)
    ✓ Testing smart contract function fetchItemBufferOne() that allows anyone to fetch item details from blockchain (176ms)
    ✓ Testing smart contract function fetchItemBufferTwo() that allows anyone to fetch item details from blockchain (109ms)


  10 passing (16s)

```



# 5. Supply chain & data auditing (on public chain / rinkeby)

The coffee supply chain contract is uploaded to:

- [etherscan address for contact](https://rinkeby.etherscan.io/address/0x4fa13c42900fac0e113289cb77e3e6a4e92a0cd3)
- [etherscan address for transaction](https://rinkeby.etherscan.io/tx/0x07f8d1cc79082352d9cc3d1601c0b54df6ab7bf383b7d81e41e7049a9d1b8dc3)


Also, '1. package dependencies' & '2. truffle compile/migrate' information are put at:

- [public/rinkeby blockchain runlog](./runlog/publicchain-rinkeby/)
