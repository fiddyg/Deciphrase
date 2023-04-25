<script>
	import Header from './Header.svelte';
	import HowToPlay from './HowToPlay.svelte';
	import RandomName from './RandomName.svelte';
	
</script>
<div class="app">
	<Header />

	<main>
		<HowToPlay />

		<!-- <RandomName /> -->

		<slot />
	</main>
	
	<footer>
		<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1498460683&color=%233b0cb2&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
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

	iframe {
		height: 50px;
		width: 100px;
	}
</style>
