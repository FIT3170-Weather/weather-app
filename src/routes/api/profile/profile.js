import {db} from '$lib/database/firestore';

export async function get(){
    try {
        const snapshot = await db.collection('Profiles').get();
        const profiles = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return {
          status: 200,
          body: { profiles },
        };
      } catch (error) {
        return {
          status: 500,
          body: { error: 'Failed to fetch data' },
        };
      }
}