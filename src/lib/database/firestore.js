
    

    import firebase from 'firebase-admin';


    const serviceAccountPath = "../../../serviceAccountKey.json";
    const serviceAccount = await import(serviceAccountPath, { assert: { type: 'json' } });

    firebase.initializeApp({
        credential: firebase.credential.cert(serviceAccount),
        databaseURL: "https://fit3170-weather-app-default-rtdb.asia-southeast1.firebasedatabase.app"
    });

    const db =  firebase.firestore();

    export {db};

