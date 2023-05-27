import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ul>
        <li>Привіт</li>
        <li>Привіт</li>
        <li style={{ color: "red" }}>Привіт</li>
        <li style={{ color: "green", fontSize: "25px" }}>Привіт</li>
      </ul>
    </>
  );
}
