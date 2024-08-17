import type { LayoutLoad } from './$types';

// get all the valid locations and the current user selected locations
// these values can be used in any component/ child component of this layout
// example of how to use can be found in +page.svelte (make sure to use "data" as variable name for "export let data" or it wont work)
export const load: LayoutLoad = async ({ fetch }) => {
    const res = await fetch('http://localhost:8000/locations')
    const locations = await res.json();

    if (typeof window !== "undefined" && sessionStorage.getItem("location") != null) 
    {   
        // get value from session storage if valid
        const location = sessionStorage.getItem("location")  
        return { locations, location }
    }
    else
    {
        // default to "kuala-lumpur"
        const location = "kuala-lumpur"
        return { locations, location }
    }
};