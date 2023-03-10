import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Cristian Esquivel | Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <h1 className="text-3xl underline">Hello world!</h1> */}
        <Navbar />
      </main>
    </>
  );
}
