import Link from "next/link";
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <p>Hola Next.js</p>
      <Link href="/productos">Productos</Link>
      <br />
      <Image
        src='/leon.jpg'
        width={400}
        height={400}
        alt="Leon"
      />
    </div>
  )
}
