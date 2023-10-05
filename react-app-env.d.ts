declare namespace NodeJS {
  interface ProcessEnv {
    apiKey: string
    authDomain: string
    databaseURL: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
    measurementId: string
    NODE_ENV: 'development' | 'production' | 'test'
    PUBLIC_URL: string
    NODE_TEST: string
  }
}
export {}
declare module 'react-dom/client';
