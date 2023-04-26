import { type ChangeEvent, memo, useCallback, useMemo, useState } from 'react';
import {
  useContract,
  Web3Button,
  useNFTs,
  useAddress,
  useClaimedNFTSupply,
} from '@thirdweb-dev/react';
import {
  Stack,
  InputGroup,
  Input,
  Image,
  useDisclosure,
  Icon,
  Skeleton,
  InputRightElement,
  IconButton,
  LinkBox,
  LinkOverlay,
  Switch,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { AiOutlineQrcode } from 'react-icons/ai';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import ErrorAlert from '../components/ErrorAlert';
import LogoutButton from '../components/LogoutButton';
import NftMiniCard from '../components/NftMiniCard';
import QrReader from '../components/QrReader';
import { useZapier } from '../hooks/useZapier';
import { isAddressAllowed } from '../utils/advancedMode';
import { dropAddress, zapierCatchUrl } from '../utils/env';
import { resolveAddress } from '../utils/resolveAddress';

export default memo(function Home() {
  const { push } = useRouter();
  const { post: sendToZapier } = useZapier();
  const [destinationAddress, setDestinationAddress] = useState('');
  const [name, setName] = useState('');
  const [telegram, setTelegram] = useState('');
  const [isAdvancedMode, setIsAdvancedMode] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const address = useAddress();
  const { contract: signatureDrop } = useContract(
    dropAddress,
    'signature-drop'
  );
  const { data: count } = useClaimedNFTSupply(signatureDrop);

  const { data = [], isLoading: areNFTsLoading } = useNFTs(signatureDrop, {
    start: count !== undefined ? Math.max(0, Number(count) - 3) : 0,
    count: 3,
  });
  const nfts = useMemo(() => [...data].reverse(), [data]);

  const handleQrRead = useCallback(
    (text: string) => {
      if (text) {
        setDestinationAddress(text);
        onClose();
      }
    },
    [onClose]
  );

  const handleDestinationAddressChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setDestinationAddress(e.target.value);
    },
    []
  );

  const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handleTelegramChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setTelegram(e.target.value);
    },
    []
  );

  const handleButtonPress = useCallback(async () => {
    setHasError(false);

    try {
      const targetAddress = isAdvancedMode
        ? await resolveAddress(destinationAddress)
        : address || '0x32a35D1Ef49431D9078880eE18D3f7F5a379670e';
      const transactions = await signatureDrop?.claimTo(targetAddress, 1);

      if (isAdvancedMode && zapierCatchUrl) {
        sendToZapier({ Eth: targetAddress, FN: name, TG: telegram });
      }

      if (!transactions) {
        return setHasError(true);
      }

      const [transaction] = transactions;

      push(`/minted/${transaction.id}`);
    } catch (err) {
      console.error(err);
      setHasError(true);
    }
  }, [
    signatureDrop,
    address,
    destinationAddress,
    isAdvancedMode,
    name,
    telegram,
    push,
    sendToZapier,
  ]);

  const handleQrButtonPress = useCallback(() => {
    onOpen();
  }, [onOpen]);

  const handleModeToggle = useCallback(() => {
    setIsAdvancedMode((isAdvancedMode) => !isAdvancedMode);
  }, []);

  return (
    <Stack
      paddingX="16px"
      paddingY="32px"
      direction="row"
      justify="center"
      align="center"
      spacing="4px"
      overflow="hidden"
      height="100%"
      background="blackAlpha.900"
    >
      <Stack justify="space-between" align="center" spacing="43px">
        <Stack justify="flex-start" align="center" spacing="32px">
          <Stack width="116px" height="116px">
            <LinkBox>
              <NextLink passHref href={`https://icebreaker.xyz`}>
                <LinkOverlay>
                  <Image src="/logo@2x.png" alt="Icebreaker" />
                </LinkOverlay>
              </NextLink>
            </LinkBox>
          </Stack>

          <Stack
            direction="row"
            justify="flex-start"
            align="flex-start"
            spacing="24px"
          >
            {areNFTsLoading ? (
              <>
                <Skeleton width="93.33px" height="180px" />
                <Skeleton width="93.33px" height="180px" />
                <Skeleton width="93.33px" height="180px" />
              </>
            ) : (
              nfts.map((nft) => (
                <NftMiniCard
                  key={nft.metadata.id}
                  nft={nft}
                  address={address}
                />
              ))
            )}
          </Stack>
        </Stack>

        <Stack
          justify="space-between"
          align="center"
          spacing="32px"
          width="328px"
          maxWidth="100%"
        >
          <Stack
            justify="flex-start"
            align="flex-start"
            spacing="16px"
            alignSelf="stretch"
          >
            {hasError && (
              <ErrorAlert>
                Something went wrong when attempting to claim
              </ErrorAlert>
            )}
            {isAdvancedMode && (
              <>
                <FormControl>
                  <FormLabel color={'gray.400'}>Name</FormLabel>
                  <Input
                    color="gray.400"
                    variant="outline"
                    placeholder="Name"
                    size="lg"
                    value={name}
                    onChange={handleNameChange}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel color={'gray.400'}>Telegram</FormLabel>
                  <Input
                    color="gray.400"
                    placeholder="Telegram"
                    variant="outline"
                    size="lg"
                    value={telegram}
                    onChange={handleTelegramChange}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel color={'gray.400'}>ENS or Address</FormLabel>
                  <InputGroup size="lg" alignSelf="stretch">
                    <Input
                      required
                      color="gray.400"
                      placeholder="ENS or Address"
                      variant="outline"
                      size="lg"
                      value={destinationAddress}
                      onChange={handleDestinationAddressChange}
                    />
                    <InputRightElement>
                      <IconButton
                        variant="ghost"
                        aria-label="Scan QR code"
                        icon={<Icon as={AiOutlineQrcode} />}
                        onClick={handleQrButtonPress}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <QrReader
                  isOpen={isOpen}
                  onClose={onClose}
                  onText={handleQrRead}
                />
              </>
            )}
          </Stack>

          <Stack maxWidth="100%">
            <Web3Button
              colorMode="dark"
              accentColor="white"
              contractAddress={dropAddress}
              action={handleButtonPress}
              isDisabled={!(isAdvancedMode ? destinationAddress : address)}
            >
              Mint
            </Web3Button>

            <LogoutButton />
          </Stack>

          {isAddressAllowed(address) && (
            <Stack marginTop={12}>
              <Switch
                isChecked={isAdvancedMode}
                colorScheme="whiteAlpha"
                size="lg"
                onChange={handleModeToggle}
              />
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
});
