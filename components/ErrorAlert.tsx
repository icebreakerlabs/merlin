import { memo, type ReactNode } from 'react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';

type ErrorAlertProps = {
  title?: string;
  children: ReactNode;
};

export default memo(function ErrorAlert({ title, children }: ErrorAlertProps) {
  return (
    <Alert status="error">
      <AlertIcon />
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
});
