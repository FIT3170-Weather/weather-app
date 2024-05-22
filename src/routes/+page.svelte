<script>
	// @ts-ignore
	import CurrentWeatherCard from './components/dashboard/CurrentWeatherCard.svelte';
	import GraphCard from './components/GraphCard.svelte';
	import BottomComponents from './components/BottomComponents.svelte';

	export let data;
</script>

<svelte:head>
	<title>CliMate</title>
	<meta name="description" content="Climate web app" />
</svelte:head>

<div class="flex m-4">
	<!-- Current weather -->
	<div class="glassmorph mr-2 p-2">
		<CurrentWeatherCard />
	</div>

	<!-- Today's insights -->
	<div class="grow place-content-center ml-2 glassmorph">
		<GraphCard />
	</div>
</div>

<!-- Other cities -->
<div class="m-4 mt-0 place-content-center glassmorph grow">
	<BottomComponents></BottomComponents>
</div>

<style>
	.glassmorph {
		@apply border bg-white bg-opacity-10 shadow-lg rounded-2xl;
	}
</style>
