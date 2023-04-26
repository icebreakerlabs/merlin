import { ethers } from 'ethers';

const provider = ethers.providers.getDefaultProvider();

export async function resolveAddress(addressOrENSName: string) {
  if (!addressOrENSName.includes('.')) {
    return addressOrENSName;
  }

  const address = await provider.resolveName(addressOrENSName);

  if (!address) {
    throw new Error('Unable to resolve ENS name to address');
  }

  return address;
}
