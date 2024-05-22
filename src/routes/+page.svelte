<script>
	// @ts-ignore
	import CurrentWeatherCard from './components/dashboard/CurrentWeatherCard.svelte';
	import GraphCard from "./components/GraphCard.svelte";
	import BottomComponents from "./components/BottomComponents.svelte";

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
		<GraphCard/>
	</div>

</div>

<!-- Other cities -->
<div class="m-4 mt-0 place-content-center glassmorph grow">
	<BottomComponents></BottomComponents>
</div>



<style>
	.other-locations{
		height: 185px;
		background-image: linear-gradient(to bottom, #ffffff42, #c4c4c430);
		border-radius: 14px;
	}

	.main-location{
		border-radius: 14px;
	}

	.graphs{
		border-radius: 14px;
	}
	.content {
       margin-left: 70px; /* Same width as the side nav */
       margin-right: 10px;
       /* Add additional styles as needed */
   }

   .grid-content {
       width: 100%;
   }

   .glassmorph {
		@apply border bg-white bg-opacity-10 shadow-lg rounded-2xl;
	}
</style>
