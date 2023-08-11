import { KavaEvmTestnet } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// If used on the FRONTEND pass your 'clientId'
const sdk = new ThirdwebSDK(KavaEvmTestnet, {
  clientId: "YOUR_CLIENT_ID",
});
// --- OR ---
// If used on the BACKEND pass your 'secretKey'
const sdk = new ThirdwebSDK(KavaEvmTestnet, {
  secretKey: "YOUR_SECRET_KEY",
});

const contract = await sdk.getContract("0xE968D26c308efBAeDC85b94A5CDf67f2710D2f84");
