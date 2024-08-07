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

<div class="flex flex-wrap max-lg:flex-col m-4">
	<!-- Current weather -->
	<div class="grow glassmorph m-4 p-2 flex items-center justify-center xl:w-1/2 max-lg:w-full">
		<CurrentWeatherCard currentWeatherData={data.currentWeather}  />
	</div>

	<!-- Today's insights -->
	<div class="grow place-content-center m-4 glassmorph">
		<GraphCard />
	</div>
</div>

<!-- Other cities -->
<div class=" ml-7 place-content-center glassmorph grow">
	<BottomComponents></BottomComponents>
</div>

<style>
	.glassmorph {
		@apply border bg-white bg-opacity-10 shadow-lg rounded-2xl;
	}
</style>
