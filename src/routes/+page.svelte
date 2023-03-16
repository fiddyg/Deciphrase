<script>
	import Game from './Game.svelte';
</script>

<svelte:head>
	<title>Search For Truth</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Game />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
