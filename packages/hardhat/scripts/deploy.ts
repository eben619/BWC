import { ethers } from "hardhat";

async function main() {
  const deploySavings = await ethers.deployContract("Savings");

  await deploySavings.waitForDeployment();

  console.log( (await deploySavings.getAddress()));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});