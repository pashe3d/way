require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');

const {PRIVATE_KEY} = process.env;

module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.20",
                settings: {
                    optimizer: {enabled: true, runs: 1000000}
                },
            },
        ],
    },
    defaultNetwork: "sepolia",
    networks: {
        hardhat: {},
        tbsc: {
            url: "https://bsc-testnet.public.blastapi.io",
            gasPrice:30000000000,
            accounts: [`0x${PRIVATE_KEY}`]
        },
        mumbai: {
            url: "https://polygon-mumbai-bor.publicnode.com",
            accounts: [`0x${PRIVATE_KEY}`]
        }
    },
}