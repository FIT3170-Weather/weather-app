import { getProfile } from '../profile/profile';

export async function get({ url }) {
    const userName = url.searchParams.get('userName');
    const result = await getProfile(userName);
    return {
        status: result.status,
        body: result.body,
    };
}