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

<div class="flex flex-wrap max-lg:flex-col m-5 max-lg:space-x-0 space-x-5 max-lg:space-y-5">
	<!-- Current weather -->
	<div class="grow glassmorph flex items-center justify-center max-lg:w-full">
		<CurrentWeatherCard currentWeatherData={data.currentWeather}  />
	</div>

	<!-- Today's insights -->
	<div class="grow place-content-center glassmorph">
		<GraphCard />
	</div>
</div>

<!-- Other cities -->
<div class="place-content-center glassmorph grow m-5">
	<BottomComponents></BottomComponents>
</div>

<style>
	.glassmorph {
		@apply border bg-white bg-opacity-10 shadow-lg rounded-2xl;
	}
</style>
