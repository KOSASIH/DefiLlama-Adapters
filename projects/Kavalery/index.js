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

const contract = await sdk.getContract("0x6BED8D9E6405FaA07ee69A4E055E687CC56C0427");
