<script>
	// @ts-ignore
	import CurrentWeatherCard from "./components/dashboard/CurrentWeatherCard.svelte";
</script>

<svelte:head>
	<title>CliMate</title>
	<meta name="description" content="Climate web app" />
</svelte:head>

<section>
	<!-- 3x4 grid used for dashboard -->
	<!-- 100vh - 64px (header height), so dashboard fills remaining height -->
	<div class="grid grid-rows-3 grid-cols-4 gap-5 p-10 justify-center h-[calc(100vh-64px)] w-screen">
		<!-- TODO: Main location here -->
		<div class="glassmorph row-span-2 col-span-2 border h-full w-full grow">
			<CurrentWeatherCard />
		</div>
		<!-- TODO: Graphs here -->
		<div class="row-span-2 col-span-2 border h-full w-full grow">Graphs</div>
		<!-- TODO: Other locations here (bottom row of locations) -->
		<div class="row-span-1 col-span-4 border h-full w-full grow">Other Locations</div>
	</div>
</section>

<style>
	.glassmorph {
		/* From https://css.glass */
		background: rgba(255, 255, 255, 0.11);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(2.9px);
		-webkit-backdrop-filter: blur(2.9px);
		border: 1px solid rgba(255, 255, 255, 0.69);
	}
</style>
