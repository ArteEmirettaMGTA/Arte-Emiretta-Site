import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-200 h-screen">
      <Head>
        <title>Arte Emiretta</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#AAA" />
      </Head>

      <main className="h-screen w-full flex items-center justify-center">
        <Link href="/ccs">
          <a className="bg-gray-800 text-white py-2 px-4 font-bold text-lg rounded-lg mx-2">
            Caracas
          </a>
        </Link>
        <Link href="/mgta">
          <a className="bg-gray-800 text-white py-2 px-4 font-bold text-lg mx-2 rounded-lg">
            Margarita
          </a>
        </Link>
      </main>
    </div>
  );
}
