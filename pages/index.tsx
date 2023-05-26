import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 style="color:green">не правильний код</h1>
      <ul class="hello">
        <li>Привіт</li>
        <li>Привіт</li>
        <li>Привіт</li>
        <li>Ще привіт</li>
        <li>Здоров</li>
      </ul>
    </>
  );
}
