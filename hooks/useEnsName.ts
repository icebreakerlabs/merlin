import { useEffect, useState } from 'react';

const ENDPOINT = 'https://api.ensideas.com/ens/resolve';
const cache = new Map<string, string>();

export function useEnsName(address?: string) {
  const [value, setValue] = useState<string | undefined>();

  useEffect(() => {
    let isCancelled = false;

    async function main(address: string) {
      const cachedEnsName = cache.get(address);

      if (cachedEnsName && cachedEnsName !== value) {
        setValue(cachedEnsName);
        return;
      }

      const response = await fetch(`${ENDPOINT}/${address}`);
      const json = (await response.json()) as { name: string } | undefined;

      if (!isCancelled && json?.name) {
        cache.set(address, json.name);
        setValue(json.name);
      }
    }

    if (
      address &&
      address !== '0x0000000000000000000000000000000000000000' &&
      !address.includes('.')
    ) {
      main(address);
    }

    return () => {
      isCancelled = true;
    };
    // We don't want to re-compute if the value changes, only when the address changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return value;
}
