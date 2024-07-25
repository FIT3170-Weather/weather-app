<script>
	// @ts-ignore
	import CurrentWeatherCard from './components/dashboard/CurrentWeatherCard.svelte';
	import GraphCard from './components/GraphCard.svelte';
	import BottomComponents from './components/BottomComponents.svelte';

	let data = {
		currentWeather: {
			sys: {
				country: "Malaysia",
				sunrise: 0,
				sunset: 0
			},
			main: {
				temp: 26,
				feels_like: 24,
				humidity: 20,
				pressure: 21,
				temp_max: 30,
				temp_min: 20,

			},
			visibility: 20,
			wind: {
				speed: 20
			}
		}
	}

	// console.log(data);

	
</script>

<svelte:head>
	<title>CliMate</title>
	<meta name="description" content="Climate web app" />
</svelte:head>

<div class="flex m-4">
	<!-- Current weather -->
	<div class="glassmorph mr-2 p-2">
		<CurrentWeatherCard currentWeatherData={data.currentWeather}  />
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
