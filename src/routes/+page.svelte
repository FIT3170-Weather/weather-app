<script lang="ts">
	// @ts-ignore
	import CurrentWeatherCard from './components/dashboard/CurrentWeatherCard.svelte';
	import GraphCard from './components/GraphCard.svelte';
	import BottomComponents from './components/BottomComponents.svelte';
	import { onMount } from 'svelte'


	// URL for the current data
	const url = 'http://localhost:8000/current';
	
	// data from layout.ts (current location to display for main dashboard)
	// data has two keys location and locations
	// we take only location here so we use data.location for the body
	import type { LayoutData } from './$types';	
	export let data: LayoutData;
	
	let error = null;
	/**
	 * @type {null}
	 */
	let weatherData: any = null;

	// Create the request body
	const requestBody = {
		location: data.location
	};

	// Use the fetch API to make the POST request
	onMount(async () => {
        try {
            // Make the POST request using fetch
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Parse the JSON response
            weatherData = await response.json();

        } catch (err) {
            // @ts-ignore
            error = err.message;
            console.error('Error:', err);
        }
	});
	
</script>
<svelte:head>
	<title>CliMate</title>
	<meta name="description" content="Climate web app" />
</svelte:head>

{#if weatherData}
<div class="flex flex-wrap max-lg:flex-col m-5 max-lg:space-x-0 space-x-5 max-lg:space-y-5">
	<!-- Current weather -->
	<div class="grow glassmorph flex items-center justify-center max-lg:w-full border-error-content">
		<CurrentWeatherCard currentWeatherData={weatherData}/>
	</div>

	<!-- Today's insights -->
	<div class="grow place-content-center glassmorph border-error-content">
		<GraphCard />
	</div>
</div>

<!-- Other cities -->
<div class="place-content-center glassmorph grow m-5 border-error-content">
	<BottomComponents></BottomComponents>
</div>
{/if}
<style>
	.glassmorph {
		@apply border bg-white bg-opacity-10 shadow-lg rounded-2xl;
	}
</style>
