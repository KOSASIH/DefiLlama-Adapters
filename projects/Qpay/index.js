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

const contract = await sdk.getContract("0x6754fCb0724A8C1DAdeD25CFabEedc184A081376");
