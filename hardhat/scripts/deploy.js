const hre = require("hardhat");

async function main() {
  const [user1, user2, user3] = await hre.ethers.getSigners()
  const GDvent = await hre.ethers.getContractFactory("GDvent")
  const contractDeployed = await GDvent.deploy()
  await contractDeployed.deployed()
  console.log("contract address", contractDeployed.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });