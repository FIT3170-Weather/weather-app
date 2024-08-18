import { auth, googleProvider } from "$lib/database/firebase";
import { signInWithPopup } from "firebase/auth";
import { writable } from "svelte/store";
import type { User } from "firebase/auth";
import { goto } from "$app/navigation";

export const authStore = writable<{ user: User | null }>({
  user: null,
});

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

        // Obtain user ID log it onto console 
        const userId = user.uid;
        console.log('User ID: ', userId);
        

        onSuccess();
        goto('/settings'); // Redirect to home or any other page after login
      } catch (error) {
        console.error('Error during sign-in with Google:', error);
      }
    },
  };
