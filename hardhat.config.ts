import { HardhatUserConfig } from "hardhat/config";

// PLUGINS
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "hardhat-deploy";
import "hardhat-deploy-ethers";

// Process Env Variables
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

// Libraries
import assert from "assert";

// @dev Put this in .env
const ALCHEMY_ID = process.env.ALCHEMY_ID;
assert.ok(ALCHEMY_ID, "no Alchemy ID in process.env");

// @dev fill this out
const DEPLOYER_PK_MAINNET = process.env.DEPLOYER_PK_MAINNET;
const ETHERSCAN_API = process.env.ETHERSCAN_API;

// ================================= CONFIG =========================================
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  // hardhat-deploy
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks: {
    hardhat: {
      // Standard config
      // timeout: 150000,
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_ID}`,
        blockNumber: 15624486,
      },
    },
    mainnet: {
      accounts: DEPLOYER_PK_MAINNET ? [DEPLOYER_PK_MAINNET] : [],
      chainId: 1,
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_ID}`,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
    ],
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
  etherscan: {
    apiKey: ETHERSCAN_API,
  },
};

export default config;
