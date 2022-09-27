module.exports = async (hre) => {
  if (hre.network.name !== "hardhat") {
    console.log(
      `Deploying GelCirculatingSupplyResolver to ${hre.network.name}. Hit ctrl + c to abort`
    );
  }

  const { deployments } = hre;
  const { deploy } = deployments;
  const { deployer } = await hre.getNamedAccounts();

  await deploy("GelCirculatingSupplyResolver", {
    from: deployer,
  });
};

module.exports.skip = async (hre) => {
  const skip = hre.network.name !== "hardhat";
  return skip ? true : false;
};

module.exports.tags = ["GelCirculatingSupplyResolver"];
