<script>
	import '../app.css';
	import './styles.css';
	import Header from './components/Header.svelte';
	import SideNav from './components/SideNav.svelte';

	import { locations } from './locations.js';
	let search_data = locations;
</script>




<div class="app min-h-dvh">
	<SideNav></SideNav>
	<Header searchData={search_data}></Header>
	<div class="flex flex-col grow">
		<div class="ml-0 md:ml-16 mt-14">
			<slot></slot>
		</div>
	</div>
</div>

<style>
</style>