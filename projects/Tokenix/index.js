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

const contract = await sdk.getContract("0xBA445Bf03E19FBdB398aA163468f517D96886A19");
