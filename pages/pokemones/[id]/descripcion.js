import { useRouter } from 'next/router';
import useIsMounted from "../../../hooks/useIsMounted";

const Descripcion = () => {
  const router = useRouter();
  const loaded = useIsMounted();

  if (!loaded) {
    return null;
  }

  return (
    <div>
      <p>Descripcion de pokemon {router.query.id}</p>
    </div>
  );
};

export default Descripcion;