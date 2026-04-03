const hre = require("hardhat");

async function main() {
    const [signer] = await hre.ethers.getSigners();

    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    const contract = await hre.ethers.getContractAt("Benchmark", contractAddress);

    const txCount = 200; 

    console.log("Running benchmark with", txCount, "transactions...");

    const startTime = Date.now();

    for (let i = 0; i < txCount; i++) {
        const tx = await contract.setValue(i);
        await tx.wait(); // wait for confirmation
    }

    const endTime = Date.now();

    const totalTime = (endTime - startTime) / 1000;

    console.log("\n===== RESULTS =====");
    console.log("Total Transactions:", txCount);
    console.log("Total Time:", totalTime, "seconds");
    console.log("TPS:", (txCount / totalTime).toFixed(2));
    console.log("Latency per tx:", (totalTime / txCount).toFixed(4), "seconds");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});