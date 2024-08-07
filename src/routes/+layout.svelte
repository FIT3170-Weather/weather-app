<script>
	import '../app.css';
	import './styles.css';
	import Header from './components/Header.svelte';
	import SideNav from './components/SideNav.svelte';
</script>

<div class="app min-h-dvh">
	<div class="">
		<SideNav></SideNav>
	</div>
	<div class="flex flex-col grow">
		<Header></Header>
		<div class="ml-20 mr-4">
			<slot></slot>
		</div>
	</div>
</div>

<style>
</style>