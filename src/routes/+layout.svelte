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
			<span aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</span>
			<span aria-current={$page.url.pathname === '/sverdle' ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</span>
		</span>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
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
		justify-content: space-around;
		align-items: center;
		padding: 12px;
		text-align: center;
	}

	footer a {
		font-weight: bold;
	}

	h3 {
		display: inline;
	}

	span {
		display: inline;
		margin: 1em;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
