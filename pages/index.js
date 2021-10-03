import Link from "next/link";
import Head from "next/head";
import loadFirebase from "../firebase.config";
import { collection, getDoc, doc, setDoc } from "firebase/firestore";

export default function Home() {
  return (
    <div className="bg-gray-900 h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-full flex items-center justify-center">
        <Link href="/ccs">
          <a className="bg-indigo-500 text-white py-2 px-4 font-bold text-lg rounded-lg mx-2">
            Caracas
          </a>
        </Link>
        <Link href="/mgta">
          <a className="bg-indigo-500 text-white py-2 px-4 font-bold text-lg mx-2 rounded-lg">
            Margarita
          </a>
        </Link>
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const firebase = await loadFirebase();
  const db = firebase.db();

  const docRef = doc(db, "productos", "XRcjLyRxmN3QW3EgxBx3");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  return {
    props: {},
  };
};
