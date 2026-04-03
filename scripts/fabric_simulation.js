const { performance } = require("perf_hooks");

async function simulateTransaction() {
    // simulate fast permissioned transaction
    return new Promise((resolve) => setTimeout(resolve, 5)); // 5ms delay
}

async function main() {
    const txCount = 200;

    console.log("Simulating Hyperledger Fabric...");

    const start = performance.now();

    for (let i = 0; i < txCount; i++) {
        await simulateTransaction();
    }

    const end = performance.now();

    const totalTime = (end - start) / 1000;

    console.log("\n===== FABRIC RESULTS =====");
    console.log("Total Transactions:", txCount);
    console.log("Total Time:", totalTime.toFixed(2), "sec");
    console.log("TPS:", (txCount / totalTime).toFixed(2));
    console.log("Latency per tx:", (totalTime / txCount).toFixed(4), "sec");
}

main();