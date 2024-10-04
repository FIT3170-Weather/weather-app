import { auth, googleProvider } from '$lib/database/firebase';
import { signInWithPopup } from 'firebase/auth';
import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';
import { goto } from '$app/navigation';

export const authStore = writable<{ user: User | null }>({
	user: null
});

let userId = 'null';

export const authHandlers = {
	// Logout call
	logout: async () => {
		await auth.signOut();
		goto('/');
	},

	// Log-in call
	loginWithGoogle: async (onSuccess: () => void) => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			const user = result.user;
			authStore.set({ user });

			// api to create user profile
			const secondResult = await fetch('http://127.0.0.1:8000/create_profile/' + user.uid, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const res1 = await secondResult.json();
			console.log(res1.message);
			if (res1.detail == null) {
				// api to add user profile data
				const thirdResult = await fetch('http://127.0.0.1:8000/update_profile_data/' + user.uid, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email: user.email,
						home_location: 'kuala-lumpur',
						username: user.displayName
					})
				});
				const res2 = await thirdResult.json();
				console.log(res2.message);
			}

			// Obtain user ID log it onto console
			userId = user.uid;
			console.log('User ID: ', userId);
			sessionStorage.setItem('userId', user.uid); // store user id in session storage

			onSuccess();
			goto('/'); // Redirect to home page
		} catch (error) {
			console.error('Error during sign-in with Google:', error);
		}
	},

	getUserId: () => {
		return userId;
	}
};
