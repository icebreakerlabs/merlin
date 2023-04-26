import { chainId } from './env';

export function isTestnet() {
  switch (chainId) {
    case 'Goerli':
    case 'Mumbai':
    case 'Localhost':
    case 'FantomTestnet':
    case 'AvalancheFujiTestnet':
    case 'OptimismGoerli':
    case 'ArbitrumGoerli':
    case 'BinanceSmartChainTestnet':
      return true;
    default:
      return false;
  }
}

export function getTestnetSlug() {
  switch (chainId) {
    case 'Mainnet':
      return 'mainnet';
    case 'Polygon':
      return 'matic';
    case 'Fantom':
      return 'fantom';
    case 'Avalanche':
      return 'avalanche';
    case 'Optimism':
      return 'optimism';
    case 'Arbitrum':
      return 'arbitrum';
    case 'BinanceSmartChainMainnet':
      return 'binance-smart-chain';
    case 'Hardhat':
      return 'hardhat';
    case 'Goerli':
      return 'goerli';
    case 'Mumbai':
      return 'mumbai';
    case 'Localhost':
      return 'localhost';
    case 'FantomTestnet':
      return 'fantom-testnet';
    case 'AvalancheFujiTestnet':
      return 'avalanche-fuji-testnet';
    case 'OptimismGoerli':
      return 'optimism-goerli';
    case 'ArbitrumGoerli':
      return 'arbitrum-goerli';
    case 'BinanceSmartChainTestnet':
      return 'binance-smart-chain-testnet';
  }
}
