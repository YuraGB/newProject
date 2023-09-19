// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite'
import { type FireBaseConfigType } from './Model/Types'
import { type Firestore } from '@firebase/firestore'

// web app Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FireBaseConfigType = {
  apiKey: process.env.REACT_APP_apiKey ?? '',
  authDomain: process.env?.REACT_APP_authDomain ?? '',
  databaseURL: process.env?.REACT_APP_databaseURL ?? '',
  projectId: process.env?.REACT_APP_projectId ?? '',
  storageBucket: process.env?.REACT_APP_storageBucket ?? '',
  messagingSenderId: process.env?.REACT_APP_messagingSenderId ??
      '',
  appId: process.env?.REACT_APP_appId ?? '',
  measurementId: process.env?.REACT_APP_measurementId ?? ''
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function getResume (db: Firestore): Promise<any> {
  const resume = collection(db, 'resume')
  try {
    const resumeFieldsData = await getDocs(resume)
    return resumeFieldsData.docs.map(resumeField => resumeField.data())
  } catch (e) {
    return e
  }
}

export default getResume(db)
