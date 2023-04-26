import { ChainId } from '@thirdweb-dev/react';

export const dropAddress = process.env.NEXT_PUBLIC_DROP_ADDRESS!;

export const chainId = process.env
  .NEXT_PUBLIC_ACTIVE_CHAIN as unknown as keyof typeof ChainId;

export const activeChain = ChainId[chainId];

export const relayerUrl = process.env.NEXT_PUBLIC_OPENZEPPELIN_URL;

export const relayerApiId = process.env.NEXT_PUBLIC_BICONOMY_API_ID;
export const relayerApiKey = process.env.NEXT_PUBLIC_BICONOMY_API_KEY;

export const advancedModeAddress = process.env
  .NEXT_PUBLIC_ADVANCED_MODE_ADDRESSES
  ? process.env.NEXT_PUBLIC_ADVANCED_MODE_ADDRESSES.split(',')
  : [];

export const typeformId = process.env.NEXT_PUBLIC_TYPEFORM_ID;

export const zapierCatchUrl = process.env.NEXT_PUBLIC_ZAPIER_CATCH_URL;
