<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<h3>&copy 2023 SJRT</h3>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: white;
		font-size: 1rem;
		margin: 1em;
		text-align: center;
	}

	footer a {
		font-weight: bold;
	}

	h3 {
		display: inline;
		color: black;
	}

	span {
		display: inline;
		margin-left: 1em;
		margin-right: 1em;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
