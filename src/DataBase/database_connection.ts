// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { type FireBaseConfigType } from "./Model/Types";
import { type Firestore } from "@firebase/firestore";
import { IResumeBlocks } from "../components/Content/useContent";

// web app Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FireBaseConfigType = {
  apiKey: process.env.REACT_APP_apiKey ?? "",
  authDomain: process.env?.REACT_APP_authDomain ?? "",
  databaseURL: process.env?.REACT_APP_databaseURL ?? "",
  projectId: process.env?.REACT_APP_projectId ?? "",
  storageBucket: process.env?.REACT_APP_storageBucket ?? "",
  messagingSenderId: process.env?.REACT_APP_messagingSenderId ?? "",
  appId: process.env?.REACT_APP_appId ?? "",
  measurementId: process.env?.REACT_APP_measurementId ?? "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getResume(db: Firestore): Promise<IResumeBlocks[] | string> {
  const resume = collection(db, "resume");

  try {
    const resumeFieldsData = await getDocs(resume);

    if (resumeFieldsData?.docs?.length) {
      return resumeFieldsData.docs.map((resumeField) =>
        resumeField.data()
      ) as IResumeBlocks[];
    }

    return "there is no data from the server";
  } catch (e) {
    return "there is no data from the server";
  }
}

export default getResume(db);
