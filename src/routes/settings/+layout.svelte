<script>
	import '../../app.css';
	import '../styles.css';
	import SideNav from "../components/SettingsSideNav.svelte";
</script>

<div class="app">
	<SideNav></SideNav>
	
	<main>
		<slot></slot> <!-- page.svelte content goes here-->
	</main>

	<footer>
	</footer>
</div>

<style>
</style>
