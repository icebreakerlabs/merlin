import { memo } from 'react';
import { useEnsName } from '../hooks/useEnsName';

type AsyncAddressTextProps = {
  address: string;
  userAddress?: string;
};

const truncateAddress = (address: string) =>
  `${address.substring(0, 5)}...${address.substring(address.length - 3)}`;

export default memo(function AsyncAddressText({
  address,
  userAddress,
}: AsyncAddressTextProps) {
  const ensName = useEnsName(address);

  return (
    <>{address === userAddress ? 'you' : ensName || truncateAddress(address)}</>
  );
});
