import { useMemo, type ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { PrivyProvider, usePrivy } from '@privy-io/react-auth';
import { ThirdwebSDKProvider } from '@thirdweb-dev/react';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import '../styles/globals.css';
import {
  activeChain,
  privyAppId,
  relayerUrl,
  relayerApiId,
  relayerApiKey,
} from '../utils/env';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrivyProvider
      appId={privyAppId}
      config={{
        appearance: {
          theme: 'dark',
          logo: '/logo@2x.png',
        },
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThirdWeb>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ThirdWeb>
    </PrivyProvider>
  );
}

type ThirdWebProps = {
  children: ReactNode;
};

const openZeppelinSdkOptions = relayerUrl
  ? {
      sdkOptions: {
        gasless: {
          openzeppelin: {
            relayerUrl,
          },
        },
      },
    }
  : null;
const biconomySdkOptions =
  relayerApiId && relayerApiKey
    ? {
        sdkOptions: {
          gasless: {
            biconomy: {
              apiId: relayerApiId,
              apiKey: relayerApiKey,
            },
          },
        },
      }
    : null;

function ThirdWeb({ children }: ThirdWebProps) {
  const { ready, getEthersProvider } = usePrivy();

  if (!ready) {
    return null;
  }

  // Get an ethers provider and signer from the user's wallet
  const provider = getEthersProvider();
  const signer = provider.getSigner();

  return (
    <ThirdwebSDKProvider
      signer={signer}
      activeChain={activeChain as any}
      {...openZeppelinSdkOptions}
      {...biconomySdkOptions}
    >
      {children}
    </ThirdwebSDKProvider>
  );
}
