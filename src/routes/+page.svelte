<script>
	import BottomComponents from "./components/BottomComponents.svelte";

</script>

<svelte:head>
	<title>CliMate</title>
	<meta name="description" content="Climate web app" />
</svelte:head>

<section>
	<!-- 3x4 grid used for dashboard -->
	<!-- 100vh - 64px (header height), so dashboard fills remaining height -->
	<div class="grid grid-rows-4 grid-cols-4 gap-5 p-10 justify-center h-[calc(100vh-64px)] w-screen">
		<!-- TODO: Main location here -->
		<div class="row-span-2 col-span-2 border h-full w-full grow main-location">Main Location</div>
		<!-- TODO: Graphs here -->
		<div class="row-span-2 col-span-2 border h-full w-full grow graphs">Graphs</div>
		<!-- TODO: Other locations here (bottom row of locations) -->
		<div class="row-span-1 col-span-4 border h-full w-full grow other-locations" >
			<BottomComponents>

			</BottomComponents>
		</div>
	</div>
</section>

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
</style>
