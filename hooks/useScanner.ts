import { useEffect, useMemo, useRef } from 'react';
import { DecodeHintType, BarcodeFormat } from '@zxing/library';
import { BrowserQRCodeReader } from '@zxing/browser';

export function useScanner(onText: (text: string) => void) {
  const ref = useRef<HTMLVideoElement>(null);
  const reader = useMemo(
    () =>
      new BrowserQRCodeReader(
        new Map<DecodeHintType, any>([
          [DecodeHintType.POSSIBLE_FORMATS, [BarcodeFormat.QR_CODE]],
        ]),
        { delayBetweenScanAttempts: 100 }
      ),
    []
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    reader.decodeFromConstraints(
      { audio: false, video: { facingMode: 'environment' } },
      ref.current,
      (result) => {
        if (result) {
          const match = result.getText().match(/:([^@]*)/);

          if (match) {
            onText(match[1]);
          }
        }
      }
    );

    return () => {
      BrowserQRCodeReader.releaseAllStreams();
    };
  }, [reader, onText]);

  return { ref };
}
