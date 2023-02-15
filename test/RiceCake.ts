import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("RiceCake", () => {
  async function deployContracts() {
    const [owner, otherAccount] = await ethers.getSigners();

    const RiceCake = await ethers.getContractFactory("RiceCake");
    const riceCake = await RiceCake.deploy();

    return { riceCake, owner, otherAccount };
  }

  it("Should return the correct name", async () => {
    const { riceCake } = await loadFixture(deployContracts);

    const name = await riceCake.name();
    expect(name).to.equal("RiceCake");
  });

  it("Should return the correct symbol", async () => {
    const { riceCake } = await loadFixture(deployContracts);

    const symbol = await riceCake.symbol();
    expect(symbol).to.equal("RICE");
  });

  it("Should return the correct desimals", async () => {
    const { riceCake } = await loadFixture(deployContracts);

    const desimals = await riceCake.decimals();
    expect(desimals).to.equal(18);
  });

  it("Should return the correct total supply", async () => {
    const { riceCake } = await loadFixture(deployContracts);

    const totalSupply = await riceCake.totalSupply();
    expect(totalSupply).to.equal("100000000000000000000000000000");
  });
});
