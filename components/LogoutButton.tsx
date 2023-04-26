import { memo } from 'react';
import { Button, type ButtonProps } from '@chakra-ui/react';
import { useConnect, useDisconnect } from '@thirdweb-dev/react';

type LogoutButtonProps = ButtonProps;

export default memo(function LogoutButton(props: LogoutButtonProps) {
  const [{ data: connection }] = useConnect();
  const disconnect = useDisconnect();

  if (!connection.connected) {
    return null;
  }

  return (
    <Button variant="outline" color="gray.400" {...props} onClick={disconnect}>
      Disconnect
    </Button>
  );
});
