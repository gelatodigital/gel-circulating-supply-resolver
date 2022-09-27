/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect } from "chai";
import hre = require("hardhat");
const { ethers, deployments } = hre;
import { GelCirculatingSupplyResolver } from "../typechain";

describe("GelCirculatingSupplyResolver test", function () {
  this.timeout(0);
  let resolver: GelCirculatingSupplyResolver;

  beforeEach(async function () {
    await deployments.fixture();
    resolver = await ethers.getContract("GelCirculatingSupplyResolver");
  });

  it("get circulating suppls", async () => {
    const { circulatingSupplyWei } =
      await resolver.returnCirculatingGelSupply();
    expect(circulatingSupplyWei).to.be.gt(ethers.utils.parseEther("90000000"));
  });
});
