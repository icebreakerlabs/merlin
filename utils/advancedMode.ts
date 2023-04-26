import { advancedModeAddress } from './env';

export const isAddressAllowed = (address = '') =>
  advancedModeAddress.some(
    (allowedAddress) => allowedAddress.toLowerCase() === address.toLowerCase()
  );
