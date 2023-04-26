import { memo } from 'react';
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';

import { useScanner } from '../hooks/useScanner';

type QrReaderProps = {
  isOpen: boolean;
  onClose: () => void;
  onText: (text: string) => void;
};

function QrPreview({ onText }: { onText: QrReaderProps['onText'] }) {
  const { ref } = useScanner(onText);

  return (
    <Box marginBlock="4" marginTop="10">
      <video width={400} height={400} ref={ref} />
    </Box>
  );
}

export default memo(function QrReader({
  isOpen,
  onText,
  onClose,
}: QrReaderProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <QrPreview onText={onText} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
