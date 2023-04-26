import type { AppProps } from 'next/app';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import {
  activeChain,
  relayerUrl,
  relayerApiId,
  relayerApiKey,
} from '../utils/env';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThirdwebProvider
        activeChain={activeChain as any}
        {...(relayerUrl
          ? { sdkOptions: { gasless: { openzeppelin: { relayerUrl } } } }
          : null)}
        {...(relayerApiId && relayerApiKey
          ? {
              sdkOptions: {
                gasless: {
                  biconomy: { apiId: relayerApiId, apiKey: relayerApiKey },
                },
              },
            }
          : null)}
      >
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </ChakraProvider>
  );
}
