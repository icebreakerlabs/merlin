<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://icebreaker.xyz">
    <img src="public/logo@2x.png" alt="Logo" width="116" height="116">
  </a>
</div>

## Contents
1. [About](#about)
2. [Overview](#overview)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Roadmap](#roadmap)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)


## About

Deploy your own NFT drop and gasless minting website in an easy-to-use, mobile friendly format without writing a single line of code. 

Requires a [Vercel][Vercel-url] account and some basic setup with [Thirdweb][Thirdweb-url] and [Typeform][Typeform-url].

Created by [Icebreaker](https://icebreaker.xyz). 

### Built With

[![Next][Next.js]][next-url]
[![React][React.js]][react-url]
[![ChakraUI][ChakraUI-logo]][ChakraUI-url]
[![ThirdWeb][ThirdWeb-logo]][Thirdweb-url]
[![Vercel][Vercel-logo]][Vercel-url]
[![Typeform][Typeform-logo]][Typeform-url]

----


## Overview

Simply fork this repository, deploy your contract using [Thirdweb][Thirdweb-url], and deploy the repo with the correct environment variables in [Vercel][Vercel-url]. 

Let us know what features you'd like to see for [future upgrades](#contributing).

## Installation

1. Fork (i.e., copy) the repo on github to your own account.

2. Deploy your personal [Signature Drop NFT contract on Thirdweb][1]. Make sure you've updated the claim conditions to allow people to mint and uploaded your NFTs. 

[1]: <https://portal.thirdweb.com/pre-built-contracts/signature-drop> "Thirdweb Signature Drop Contract"


3. [**Optional step**] Set up your [Typeform][Typeform-url] for contact info. This'll allow minters to enter their contact info after minting your NFT. Make sure you've configured hidden fields of `@address` and `@owner` from the "Advanced" settings in the share tab. Get your typeform ID by looking at the parameter `xxxxx` in the url on that admin page at `https://admin.typeform.com/form/xxxxx/share`.

4. Deploy the repo using [Vercel][Vercel-url].
  - Set the drop address and active chains in the environment variables in vercel:
  
    `NEXT_PUBLIC_DROP_ADDRESS="YOUR DROP ADDRESS"`
    
    `NEXT_PUBLIC_ACTIVE_CHAIN="YOUR SELECTED CHAIN"`
  - See [Thirdweb][Thirdweb-url] for the list of potential chains. Note that these are case sensitive.

5. Happy minting!

----


## Usage

Anyone who's interested in easily deploying their own NFT contract and minting app, particularly for in-person events.

## Roadmap

None.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions are **greatly appreciated**.

If you have a suggestion that would make this better, fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

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
[Thirdweb-url]: https://thirdweb.com/
[Vercel-logo]: https://img.shields.io/badge/-vercel-black?style=for-the-badge
[Vercel-url]: https://vercel.com/
[Typeform-logo]: https://img.shields.io/badge/-typeform-lightgrey?style=for-the-badge
[Typeform-url]: https://typeform.com
[ChakraUI-logo]: https://shields.io/badge/chakra--ui-black?logo=chakraui&style=for-the-badge
[ChakraUI-url]: https://chakra-ui.com/
