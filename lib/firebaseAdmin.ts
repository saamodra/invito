import admin from "firebase-admin";

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");
const hasRequiredEnv = Boolean(projectId && clientEmail && privateKey);

let firestoreInstance: admin.firestore.Firestore | null = null;
let hasLoggedMissingEnv = false;

const ensureFirebaseApp = () => {
  if (firestoreInstance) {
    return firestoreInstance;
  }

  if (!hasRequiredEnv) {
    if (!hasLoggedMissingEnv) {
      console.warn("Firebase Admin environment variables are missing; skipping initialization.");
      hasLoggedMissingEnv = true;
    }
    return null;
  }

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    });
  }

  firestoreInstance = admin.firestore();
  return firestoreInstance;
};

export const getFirestore = () => {
  const firestore = ensureFirebaseApp();
  if (!firestore) {
    throw new Error("Firebase Admin is not configured.");
  }
  return firestore;
};

export const getAdmin = () => {
  if (!ensureFirebaseApp()) {
    throw new Error("Firebase Admin is not configured.");
  }
  return admin;
};

export { admin };
