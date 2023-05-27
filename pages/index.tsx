import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ul className="ffdfd">
        <li>Привіт</li>
        <li>Привіт</li>
        <li>Привіт</li>
        <li>Шо робиш</li>
      </ul>
    </>
  );
}
