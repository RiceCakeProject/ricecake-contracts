import { ethers } from "hardhat";

async function main() {
  const RiceCake = await ethers.getContractFactory("RiceCake");
  const riceCake = await RiceCake.deploy();

  await riceCake.deployed();

  console.log(`Deployed to ${riceCake.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
