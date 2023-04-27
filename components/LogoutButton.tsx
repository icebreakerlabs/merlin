import { memo } from 'react';
import { Button, type ButtonProps } from '@chakra-ui/react';
import { usePrivy } from '@privy-io/react-auth';

type LogoutButtonProps = ButtonProps;

export default memo(function LogoutButton(props: LogoutButtonProps) {
  const { authenticated, logout } = usePrivy();

  if (!authenticated) {
    return null;
  }

  return (
    <Button variant="outline" color="gray.400" {...props} onClick={logout}>
      Log out
    </Button>
  );
});
