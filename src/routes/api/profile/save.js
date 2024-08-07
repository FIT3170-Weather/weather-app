/* eslint-disable @typescript-eslint/ban-ts-comment */
import { saveProfile } from './profile';

export const POST = async (request) => {
    try {
        const data = await request.json();
        const result = await saveProfile({ body: data });
        return {
            status: result.status,
            body: result.body,
        };
    } catch (error) {
        return {
            status: 500,
            body: { error: 'Internal server error' }
        };
    }
}