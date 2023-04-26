import { memo } from 'react';
import {
  Badge,
  LinkBox,
  LinkOverlay,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import { type NFT } from '@thirdweb-dev/sdk';
import NextLink from 'next/link';

import AsyncAddressText from './AsyncAddressText';
import { dropAddress } from '../utils/env';
import { getTestnetSlug, isTestnet } from '../utils/testnets';
import { type NftAttributes } from '../types/nft';

type NftCardProps = {
  tokenId: string;
  nft?: NFT;
  address?: string;
};

const NFT_LINK_BASE = `https://${
  isTestnet() ? 'testnets.' : ''
}opensea.io/assets/${getTestnetSlug()}/${dropAddress}`;

export default memo(function NftCard({ tokenId, nft, address }: NftCardProps) {
  const isLoaded = !!nft;
  const nftLink = `${NFT_LINK_BASE}/${tokenId}`;

  return (
    <LinkBox>
      <NextLink passHref href={nftLink}>
        <LinkOverlay>
          <Stack justify="flex-start" align="center" spacing="16px">
            <SkeletonText noOfLines={1} isLoaded={isLoaded}>
              <Text
                fontFamily="Inter"
                lineHeight="1.56"
                fontWeight="bold"
                fontSize="18px"
                textTransform="uppercase"
                color="whiteAlpha.700"
                textAlign="center"
              >
                {nft?.metadata.name}
              </Text>
            </SkeletonText>

            <Skeleton height={360} width={360} isLoaded={isLoaded}>
              <Image
                alt={nft?.metadata.description ?? ''}
                borderRadius="16px"
                src={nft?.metadata?.image ?? '/1.jpg'}
              />
            </Skeleton>

            <SkeletonText noOfLines={1} isLoaded={isLoaded}>
              {nft?.metadata?.attributes ? (
                <Badge variant="outline" fontSize="16px">
                  Farcaster: {(nft.metadata.attributes as NftAttributes)[1].value}
                </Badge>
              ) : null}
            </SkeletonText>

            <SkeletonText noOfLines={1} isLoaded={isLoaded}>
              <Text
                fontFamily="Inter"
                lineHeight="1.56"
                fontWeight="bold"
                fontSize="18px"
                textTransform="uppercase"
                color="whiteAlpha.700"
                textAlign="center"
                align="center"
              >
                owned by:{' '}
                <AsyncAddressText
                  address={nft?.owner ?? ''}
                  userAddress={address}
                />
              </Text>
            </SkeletonText>
          </Stack>
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  );
});
