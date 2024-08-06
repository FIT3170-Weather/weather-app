<script>
	import '../app.css';
	import './styles.css';
	import Header from './components/Header.svelte';
	import SideNav from './components/SideNav.svelte';
</script>

<div class="app min-h-dvh">
	<SideNav></SideNav>
	
	<div class="flex flex-col grow">
		<Header></Header>
		<div class="ml-20">
			<slot></slot>
		</div>
	</div>
</div>

<style>
</style>