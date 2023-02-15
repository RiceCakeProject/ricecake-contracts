import type { HardhatUserConfig } from "hardhat/config";
import type { NetworkUserConfig } from "hardhat/types";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-solhint";
import * as dotenv from "dotenv";
dotenv.config();

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || "";
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const MNEMONIC = process.env.MNEMONIC || "book fit fly ketchup also elevator scout mind edit fatal where rookie";

const chainIds = {
  mainnet: 1,
  goerli: 5,
  hardhat: 31337,
};

const createNetworkConfig = (network: keyof typeof chainIds): NetworkUserConfig => ({
  accounts: [DEPLOYER_PRIVATE_KEY],
  chainId: chainIds[network],
  url: `https://eth-${network}.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
});

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    mainnet: createNetworkConfig("mainnet"),
    goerli: createNetworkConfig("goerli"),
    hardhat: {
      chainId: chainIds.hardhat,
      accounts: {
        count: 10,
        initialIndex: 0,
        mnemonic: MNEMONIC,
      },
    }
  },
  solidity: "0.8.17",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 100,
    enabled: true,
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  }
};

export default config;
