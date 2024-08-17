import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
  const res = await fetch('http://localhost:8000/locations')
  const locations = await res.json();
  console.log(locations)

  return { locations }
};