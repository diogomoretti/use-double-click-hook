import { useCallback, useRef } from 'react';

interface UseDoubleClickOptions {
  latency?: number;
  onDoubleClick: () => void;
}

export const useDoubleClick = ({
  latency = 300,
  onDoubleClick,
}: UseDoubleClickOptions) => {
  const clickTimeout = useRef<number | null>(null);
  const clickCount = useRef(0);

  const clearClickTimeout = () => {
    if (clickTimeout.current) {
      window.clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
    }
  };

  const handleClick = useCallback(() => {
    clickCount.current += 1;

    if (clickCount.current === 1) {
      clickTimeout.current = window.setTimeout(() => {
        clickCount.current = 0;
        clearClickTimeout();
      }, latency);
    } else if (clickCount.current === 2) {
      onDoubleClick();
      clickCount.current = 0;
      clearClickTimeout();
    }
  }, [latency, onDoubleClick]);

  return handleClick;
};