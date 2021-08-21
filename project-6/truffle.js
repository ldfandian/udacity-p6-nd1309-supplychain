// init rinkeby test env
const HDWalletProvider = require('./node_modules/truffle-hdwallet-provider');
const infuraKey = "b1e58431d4b14c639767eb364767aff6";
const fs = require('fs');
const mnemonic = fs.readFileSync("./rinkeby-account-mnemonic.secret").toString().trim();


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // Rinkeby's id
      gas: 4500000,        // Rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
      networkCheckTimeout: 999999, // <- New attribute HERE
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 2000, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.4.24",
      // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }

};
