import { useRouter } from 'next/router';
import useIsMounted from "../../hooks/useIsMounted";

const Producto = () => {
  const loaded = useIsMounted();
  const router = useRouter();

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