import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>не правильний код</h1>
      <ul className="hello">
        <li>Привіт</li>
        <li>Привіт</li>
        <li>Привіт</li>
        <li>Ще привіт</li>
        <li>Здоров</li>
      </ul>
    </>
  );
}
