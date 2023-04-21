<script>
	import Header from './Header.svelte';
	import HowToPlay from './HowToPlay.svelte';
	
</script>
<div class="app">
	<Header />

	<main>
		<HowToPlay />

		<slot />
	</main>

	<footer>
		<h2>&copy 2023 SJRT</h2>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: rgba(0, 0, 0, .5);
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
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}
</style>
