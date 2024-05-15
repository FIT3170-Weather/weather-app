<script>
	// @ts-ignore
	import CurrentWeatherCard from './components/dashboard/CurrentWeatherCard.svelte';
</script>

<svelte:head>
	<title>CliMate</title>
	<meta name="description" content="Climate web app" />
</svelte:head>

<div class="flex m-4">
	<div class="glassmorph mr-2 p-2 rounded-2xl">
		<CurrentWeatherCard />
	</div>
	<div class="grow place-content-center ml-2 glassmorph rounded-2xl">
		<p class="text-center">Today's Insights</p>
	</div>
</div>
<div class="m-4 mt-0 place-content-center glassmorph rounded-2xl grow">
	<p class="text-center">Other Cities</p>
</div>

<style>
	.glassmorph {
		@apply border bg-white bg-opacity-10 shadow-lg;
	}
</style>
