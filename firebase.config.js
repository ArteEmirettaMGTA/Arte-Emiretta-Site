import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const loadFirebase = async () => {
  try {
    const config = {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID,
    };

    await initializeApp(config);
  } catch (error) {
    if (!/already exist/.test(error.message)) {
      console.error("Initialization error.", error.stack);
    }
  }

  return {
    db: getFirestore,
  };
};

export default loadFirebase;
