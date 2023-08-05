import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// If used on the FRONTEND pass your 'clientId'
const sdk = new ThirdwebSDK("mumbai", {
  clientId: "YOUR_CLIENT_ID",
});
// --- OR ---
// If used on the BACKEND pass your 'secretKey'
const sdk = new ThirdwebSDK("mumbai", {
  secretKey: "YOUR_SECRET_KEY",
});

const contract = await sdk.getContract("0x2C6eE630aA7aDa2e9f54b310459Cd69b89949b6c");
