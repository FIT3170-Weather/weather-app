<script lang="ts">
	// let location = 'Kuala Lumpur, Malaysia';
	import { onMount } from 'svelte';

	import HistoryStat from '../components/history/HistoryStat.svelte';
	import HistoryInfo from '../components/history/HistoryInfo.svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	const url = `/forecast-api/historical`;

	let historicalData: any[] = []; // Initialize as an empty array
	let location: string | null = data.location;
	let error: string | null = null;

	// Fetch historical data on mount
	onMount(async () => {
		if (location) {
			location =
				location.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) + ', ' + 'Malaysia';
		} else {
			location = '';
		}
		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ location: data.location })
			});
			if (!response.ok) {
				console.error('Response not OK:', response.status, await response.text());
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const resData = await response.json();
			if (resData.success) {
				historicalData = resData.historical;
			} else {
				throw new Error('Data fetch was successful but no data was returned');
			}
		} catch (err) {
			error = (err as Error).message;
			console.error('Error fetching historical data:', error);
		}
		console.log(historicalData);
	});

	function formatDate(isoString: string): string {
		const date = new Date(isoString);
		return date.toLocaleDateString(undefined, { month: '2-digit', day: '2-digit' });
	}

	function formatDay(isoString: string): string {
		const date = new Date(isoString);
		return date.toLocaleDateString(undefined, { weekday: 'short' });
	}

	// "date": "2024-08-16",
	//         "temperature_2m": 28.81,
	//         "relative_humidity_2m": 78.92,
	//         "precipitation": 0.14,
	//         "pressure_msl": 1008.0,
	//         "weather_code": "Thunderstorm",
	//         "cloud_cover": 88.46,
	//         "visibility": 18788.33,
	//         "wind_speed_10m": 6.5

	let page_title = 'Historical Data:';
	let page_title_description = '7-Day Review';
</script>

<svelte:head>
	<title>CliMate - Historical Data</title>
	<meta name="description" content="Climate web app" />
</svelte:head>

<section class="flex flex-col items-center">
	<header class="flex justify-start items-center w-full p-5 text-white text-2xl">
		<h1>{location}</h1>
	</header>
	<div
		class="flex flex-col sm:flex-row justify-center gap-5 py-5 pb-8 w-full text-white text-3xl text-center"
	>
		<h1>{page_title}</h1>
		<h1>{page_title_description}</h1>
	</div>
	<div class="flex flex-col w-full items-center px-5 md:px-0">
		{#if historicalData && Array.isArray(historicalData)}
			{#each historicalData as history}
				<div
					class="m-2.5 p-4 border border-error-content bg-base-content bg-opacity-10 shadow-xl rounded-lg w-full md:w-4/5"
				>
					<div class="grid grid-cols-1 md:grid-cols-6 gap-4">
						<div class="md:col-span-2 col-span-1">
							<HistoryInfo
								day={history.date ? formatDay(history.date) : 'N/A'}
								date={history.date ? formatDate(history.date) : 'N/A'}
								message={history.weather_code ? history.weather_code : 'N/A'}
								temp={`${history.temperature_2m ? history.temperature_2m + '°C' : 'N/A'}`}
							/>
						</div>
						<div class="md:col-span-4 col-span-1">
							<HistoryStat
								humidity_percentage={history.relative_humidity_2m
									? history.relative_humidity_2m
									: 'N/A'}
								wind_speed={history.wind_speed_10m ? history.wind_speed_10m : 'N/A'}
								pressure={history.pressure_msl ? history.pressure_msl : 'N/A'}
								percipitation={history.precipitation ? history.precipitation : 'N/A'}
								visibility={history.visibility ? history.visibility : 'N/A'}
								cloud_cover_percentage={history.cloud_cover ? history.cloud_cover : 'N/A'}
							/>
						</div>
					</div>
				</div>
			{/each}
		{:else}
			<div>Loading or no historical data available.</div>
		{/if}
	</div>
</section>
