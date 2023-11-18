const hre = require("hardhat");

async function main() {

  const Chai = await hre.ethers.getContractFactory("chai");
  const chai = await Chai.deploy();

  await chai.waitForDeployment();

  console.log(
    `deployed contract Address: ${chai.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 

//deployed contract address: 0x31A9B04Ba845A4e6C3F231c77857132198a174d9