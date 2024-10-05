import { browser } from '$app/environment';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	if (browser) {
		const res = await fetch(
			'/api/profiles/' + sessionStorage.getItem('userId') + '/get_locations',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		const preferences = await res.json();

		return { preferences };
	}
};
