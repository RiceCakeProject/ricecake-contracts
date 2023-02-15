import type { HardhatUserConfig } from "hardhat/config";
import type { NetworkUserConfig } from "hardhat/types";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-solhint";
import * as dotenv from "dotenv";
dotenv.config();

const BNB_ATN_API_KTY = process.env.BNB_ATN_API_KTY || "";
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY || "";
const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY || "";
const MNEMONIC = process.env.MNEMONIC || "book fit fly ketchup also elevator scout mind edit fatal where rookie";

const chainIds = {
  bnbTestnet: 97,
  hardhat: 31337,
};

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    bnbTestnet: {
      chainId: chainIds.bnbTestnet,
      url: `https://bsc-testnet-rpc.allthatnode.com/${BNB_ATN_API_KTY}`,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
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
    apiKey: BSCSCAN_API_KEY,
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  }
};

export default config;
