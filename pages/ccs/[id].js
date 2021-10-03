import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import loadFirebase from "../../firebase.config";
import { getDoc, doc } from "firebase/firestore";

export default function ccsProduct({ product }) {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen lg:flex lg:items-center lg:justify-center">
        <div className="lg:w-1/2 h-screen p-6 flex items-center justify-center">
          <img
            src={product.image}
            alt=""
            className="h-5/6 rounded-lg shadow-lg"
          />
        </div>
        <div className="p-4 lg:w-1/2 lg:h-full lg:p-20">
          <h1 className="text-white font-bold text-xl">{product.nombre}</h1>
          <h2 className="text-gray-300 text-lg">{product.precio} $</h2>
          <hr className="my-4 border-gray-600" />
          <p
            className="text-white"
            dangerouslySetInnerHTML={{ __html: product.descripcion }}
          />
          <button className="px-8 py-2 border-2 border-indigo-600 mr-2 text-white text-sm font-medium rounded hover:border-0 hover:bg-indigo-600 focus:outline-none">
            Atras
          </button>
          <button className="px-8 py-2 border-2 border-indigo-600 ml-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 mt-3">
            Ordenar
          </button>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async ({ query: { id } }) => {
  const firebase = await loadFirebase();
  const db = firebase.db();
  const docRef = doc(db, "ccsCatalog", id);
  const docSnap = await getDoc(docRef);

  const product = docSnap.data();

  return {
    props: {
      product,
    },
  };
};
