<script>
	import '../app.css';
	import './styles.css';
	import Header from './components/Header.svelte';
	import SideNav from './components/SideNav.svelte';
</script>

<div class="app">
	<Header></Header>
	<SideNav></SideNav>
	
	<main>
		<slot></slot> <!-- page.svelte content goes here-->
	</main>

	<footer>
	</footer>

</div>

<style>
</style>
