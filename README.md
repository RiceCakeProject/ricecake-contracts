# RiceCake

This project contains the main features of the ricecake application.

## RiceCake Contracts

### Mainnet

- Coming soon

### Testnet

- Token: https://testnet.bscscan.com/address/0x717C82D2FFE50357A6c81a4c3144E656c2468309

## How to use

Clone the repository

```shell
git clone git@github.com:RiceCakeProject/ricecake-contracts.git
```

Run yarn at the root of the workspace

```shell
cd ricecake-contracts
yarn
```

Testing contracts

```shell
npx hardhat node
npx hardhat test
```

Deploying to a testnet network

```shell
cp .env.example
npx hardhat run scripts/deployToRiceCake.js --network goerli
```

Contact us

- Email: ricecake.swap@gmail.com
