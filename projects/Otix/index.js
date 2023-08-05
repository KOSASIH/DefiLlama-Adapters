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

const contract = await sdk.getContract("0x2682eDbab91E7dA0bb06930067C39d3654D3Ea7a");
