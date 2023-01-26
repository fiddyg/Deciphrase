<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { page } from '$app/stores';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<h3>&copy 2023 SJRT</h3>
		
		<span>
			<span aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</span>
			<span aria-current={$page.url.pathname === '/leaderboard' ? 'page' : undefined}>
				<a href="/leaderboard">Leaderboard</a>
			</span>
		</span>
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
	}

	footer a {
		font-weight: bold;
	}

	h3 {
		display: inline;
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
