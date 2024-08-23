import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    const res = await fetch('http://localhost:8000/profiles/'+ sessionStorage.getItem("userId") + '/get_locations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const preferences = await res.json();

    return { preferences };
}) satisfies PageLoad;