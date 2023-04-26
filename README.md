<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://icebreaker.xyz">
    <img src="public/logo@2x.png" alt="Logo" width="116" height="116">
  </a>
</div>

## About

Created by Icebreaker for ETHDenver 2023. Sharing the source code for other builders to easily launch simple NFT drops in a mobile-minting friendly dapp format.

Note that the current linked contract only allows minting from a single allowlisted address. See installation section for details.

### Built With

[![Next][Next.js]][next-url]
[![React][React.js]][react-url]
[![ChakraUI][ChakraUI-logo]][ChakraUI-url]
[![ThirdWeb][ThirdWeb-logo]][thirdweb-url]
[![Vercel][Vercel-logo]][Vercel-url]
[![Typeform][Typeform-logo]][Typeform-url]

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- yarn
- Node.js v18+

### Installation & setup

1. Fork and clone the repo
   ```sh
   git clone https://github.com/icebreakerlabs/protobreaker.git
   ```
2. Install npm packages
   ```sh
   yarn
   ```
3. Rename `.env.template` to `.env` and set required environment variables:

   `NEXT_PUBLIC_DROP_ADDRESS="YOUR DROP ADDRESS"`

   `NEXT_PUBLIC_ACTIVE_CHAIN="YOUR SELECTED CHAIN"`

   A valid, case-sensitive chain name must be used here. Valid options are:
   - `Mainnet`
   - `Goerli`
   - `Polygon`
   - `Mumbai`
   - `Localhost`
   - `Hardhat`
   - `Fantom`
   - `FantomTestnet`
   - `Avalanche`
   - `AvalancheFujiTestnet`
   - `Optimism`
   - `OptimismGoerli`
   - `Arbitrum`
   - `ArbitrumGoerli`
   - `BinanceSmartChainMainnet`
   - `BinanceSmartChainTestnet`
4. Start the development server
   ```sh
   yarn dev
   ```
5. Create your own versions of the NFT smart contract and typeform, then update the app to point to the new addresses

   - Go to [thirdweb][thirdweb-url] and deploy your own contract on testnet and mainnet, and upload all the NFTs and claim conditions. Update the contract addresses in utils/env.ts. Please note that the chains are currently hardcoded for goerli and mainnet, so if you're deploying on other chains, you'll need to update those settings in env.ts. Also components/NftCard.tsx hardcodes the opensea links to ethereum so you may need to update that parameter if your main contract is not on ethereum mainnet.
   - Ensure that you have allowlisted the wallet you plan on minting from on thirdweb in its claim conditions.
   - Update the typeform ID to use your own typeform. Make sure you've configured hidden fields of @address and @owner from the "Advanced" settings in the share tab. You can get the ID by simply looking at the parameter xxxxx in the url on that admin page at https://admin.typeform.com/form/xxxxx/share.

## Usage

Anyone who's interested in easily deploying their own NFT contract and minting app, which others can view.

## Roadmap

None. We released this app for fun at ETHDenver 2023. However, we at some point do intend to demonstrate how this looks when deployed on other chains and using a relayer. This app was originally forked from the thirdweb signaturedrop contract, so it also has an api to support signature-based minting, though this feature is not currently enabled in the protobreaker app.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the project
2. Create your feature branch (`git checkout -b feat/your-feature`)
3. Commit your changes (`git commit -m 'feat: Add some feature'`)
4. Push to the branch (`git push origin feat/your-feature`)
5. Open a pull request

## License

Distributed under the MIT license. See `LICENSE.md` for more information.

## Contact

You can reach us at opensource at icebreaker.xyz.

<!-- MARKDOWN LINKS & IMAGES -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[ThirdWeb-logo]: https://img.shields.io/badge/-thirdweb-critical?style=for-the-badge
[thirdweb-url]: https://thirdweb.com/
[Vercel-logo]: https://img.shields.io/badge/-vercel-black?style=for-the-badge
[Vercel-url]: https://vercel.com/
[Typeform-logo]: https://img.shields.io/badge/-typeform-lightgrey?style=for-the-badge
[Typeform-url]: https://typeform.com
[ChakraUI-logo]: https://shields.io/badge/chakra--ui-black?logo=chakraui&style=for-the-badge
[ChakraUI-url]: https://chakra-ui.com/
