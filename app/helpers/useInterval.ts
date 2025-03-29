import { useEffect } from 'react';

function useInterval(callback: () => void, delay: number) {
  useEffect(() => {
    const id = setInterval(() => callback(), delay);

    return () => clearInterval(id);
  }, [delay, callback]);
}

export default useInterval;
