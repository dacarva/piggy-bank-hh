// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat')

async function main() {
	// Hardhat always runs the compile task when running scripts with its command
	// line interface.
	//
	// If this script is run directly using `node` you may want to call compile
	// manually to make sure everything is compiled
	// await hre.run('compile');

	// We get the contract to deploy
	const Piggy = await hre.ethers.getContractFactory('PiggyBank')
	const piggy = await Piggy.deploy('My Piggy Bank')
	await piggy.deployed()

	const Hub = await hre.ethers.getContractFactory('Hub')
	const hub = await Hub.deploy()
	await hub.deployed()

	console.log('Piggy deployed to:', piggy.address)
	console.log('Hub deployed to:', hub.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
