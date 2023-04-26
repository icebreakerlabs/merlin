import { memo } from 'react';
import {
  Badge,
  Box,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import { type NFT } from '@thirdweb-dev/sdk';
import NextLink from 'next/link';

import { type NftAttributes } from '../types/nft';
import AsyncAddressText from './AsyncAddressText';

type NftMiniCardProps = {
  nft: NFT;
  address?: string;
};

export default memo(function NftMiniCard({ nft, address }: NftMiniCardProps) {
  return (
    <LinkBox key={nft.metadata.id}>
      <NextLink href={`/minted/${nft.metadata.id}`} passHref>
        <LinkOverlay>
          <Stack
            justify="flex-start"
            align="center"
            spacing="6px"
            width="93.33px"
          >
            <Box flex="1" borderRadius="16px" alignSelf="stretch" />
            <Image
              alt={nft.metadata.description ?? ''}
              borderRadius="16px"
              src={nft.metadata?.image ?? '/1.jpg'}
              width="93.33px"
              height="93.33px"
            />
            <Text
              fontFamily="Inter"
              lineHeight="1.43"
              fontWeight="semibold"
              fontSize="14px"
              color="gray.400"
              alignSelf="stretch"
              textAlign="center"
            >
              #{nft.metadata.id}
            </Text>

            {nft.metadata.attributes ? (
              <Badge variant="outline" fontSize="12px">
                {(nft.metadata.attributes as NftAttributes)[0].value}
              </Badge>
            ) : null}

            <Text
              fontFamily="Inter"
              lineHeight="1.43"
              fontWeight="semibold"
              fontSize="14px"
              color="gray.400"
              alignSelf="stretch"
              textAlign="center"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              <AsyncAddressText address={nft.owner} userAddress={address} />
            </Text>
          </Stack>
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  );
});
