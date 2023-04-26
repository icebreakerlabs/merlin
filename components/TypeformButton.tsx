import { memo, type ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { PopupButton } from '@typeform/embed-react';

type TypeformButtonProps = {
  id: string;
  address?: string;
  owner?: string;
  children: ReactNode;
};

export default memo(function TypeformButton({
  id,
  address = 'unknown',
  owner = '',
  children,
}: TypeformButtonProps) {
  return (
    <Box
      color="gray.400"
      width="312px"
      height="48px"
      maxWidth="100%"
      borderRadius="5px"
      borderWidth="1px"
      borderColor="gray.400"
      backgroundColor="black"
      verticalAlign="middle"
      justifyContent="center"
      display="flex"
    >
      <PopupButton
        id={id}
        style={{ width: '100%' }}
        hidden={{ address, owner }}
      >
        {children}
      </PopupButton>
    </Box>
  );
});
