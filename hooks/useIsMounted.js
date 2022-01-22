import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const useIsMounted = () => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setLoaded(true);
    }
  }, [router.isReady]);

  return loaded;
};

export default useIsMounted;