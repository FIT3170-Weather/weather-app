const { initializeApp, applicationDefault } = await import('firebase-admin/app');
const { getFirestore } = await import('firebase-admin/firestore');

// const serviceAccountPath = "../../../serviceAccountKey.json";
// const serviceAccount = await import(serviceAccountPath, { assert: { type: 'json' } });

const app = initializeApp({
    credential: applicationDefault(),
    databaseURL: "https://fit3170-weather-app-default-rtdb.asia-southeast1.firebasedatabase.app"
})

const db =  getFirestore(app)

export {db};

