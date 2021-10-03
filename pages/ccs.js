import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import loadFirebase from "../firebase.config";
import {
  collection,
  getDoc,
  doc,
  setDoc,
  query,
  getDocs,
} from "firebase/firestore";

export default function Home({ catalog }) {
  console.log(catalog);
  return (
    <div className="bg-gray-200 h-screen">
      <Head>
        <title>Arte Emiretta Caracas</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#AAA" />
      </Head>

      <main className="h-screen w-full p-2">
        {catalog.map(({ id, data: { nombre, image, precio } }) => (
          <div key={id}>
            <div className="bg-gray-500 shadow-lg h-52 lg:w-96 sm:w-full flex rounded-lg overflow-hidden relative">
              <img src={image} alt={nombre} className="h-full" />
              <div className="w-full p-5 text-white">
                <span className="text-lg block">{nombre}</span>
                <hr className="my-4" />
                <span className="text-sm">
                  Precio: <span className="text-gray-200">{precio}$</span>
                </span>

                <Link href={`/ccs/${id}`}>
                  <a className="mt-auto absolute right-2 bottom-2 px-8 py-2 border-2 border-white ml-2 bg-white text-black text-sm font-medium rounded hover:bg-white focus:outline-none focus:bg-white">
                    Ver mas
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const firebase = await loadFirebase();
  const db = firebase.db();

  let catalog = [];

  const querySnapshot = await getDocs(collection(db, "ccsCatalog"));

  await querySnapshot.forEach((doc) => {
    catalog.push({ id: doc.id, data: doc.data() });
  });

  return {
    props: {
      catalog,
    },
  };
};
