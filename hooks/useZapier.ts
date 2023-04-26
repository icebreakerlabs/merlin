import { useCallback } from 'react';
import { zapierCatchUrl } from '../utils/env';

type ZapierData = {
  FN?: string;
  TG?: string;
  Eth: string;
};

export function useZapier() {
  const post = useCallback(async (data: ZapierData) => {
    if (!zapierCatchUrl) {
      return;
    }

    const response = await fetch(zapierCatchUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  }, []);

  return { post };
}
