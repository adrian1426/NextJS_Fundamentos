import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Producto = () => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setLoaded(true);
    }
  }, [router.isReady]);

  if (!loaded) {
    return null;
  }

  return (
    <div>
      <p>Producto id {router.query.idProducto}</p>
    </div>
  );
};

export default Producto;