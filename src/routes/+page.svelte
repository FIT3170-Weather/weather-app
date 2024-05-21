<script>
	import GraphCard from "./components/GraphCard.svelte";
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
		<div class="row-span-2 col-span-2 border h-full w-full grow">Main Location</div>
		<!-- TODO: Graphs here -->
		<div class="row-span-2 col-span-2 h-full w-full grow">
			<GraphCard/>
		</div>
		<!-- TODO: Other locations here (bottom row of locations) -->
		<div class="row-span-1 col-span-4 border h-full w-full grow">Other Locations</div>
	</div>
	<!-- {#each data.props as item}
		{#if item.location.location_name == "Petaling Jaya"}
			<div>
			<h3>{item.location.location_name}</h3>
			<h3>{item.date}</h3>
			<p>{item.summary_forecast}</p>
			</div>
		{/if}
	{/each} -->
</section>

<style>
</style>
