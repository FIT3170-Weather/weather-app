<script>
	import '../app.css';
	import './styles.css';
	import Header from './components/Header.svelte';
	import SideNav from './components/SideNav.svelte';
</script>

<div class="app">
	<div class="flex flex-col h-dvh">
		<Header></Header>
		<slot></slot>
		<footer></footer>
	</div>
</div>

<style>
</style>
