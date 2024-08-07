import {db} from '$lib/database/firestore';

/**
 * @param {string} userName
 */

export async function getProfile(userName){
    try {
        const profile = await db.collection('Profiles').doc(userName).get();
        if (!profile.exists) {
        return {
          status: 200,
          body: { error: "Profile does not exist!" },
        };
      }
      return profile.data();

      } catch (error) {
        return {
          status: 500,
          body: { error: 'Failed to fetch data' },
        };
      }
}


/**
 * @param {{ body: {userName: string; location: string; email: string; password: string; }; }} request
 */
export async function saveProfile(request){
    const { userName, location, email, password } = request.body;
    try {
        await db.collection('Profiles').doc(userName).set({location, email, password });
        return {
          status: 200,
          body: { message: 'Profile saved' },
        };
      } catch (error) {
        return {
          status: 500,
          body: { error: 'Failed to save profile' },
        };
      }
}

