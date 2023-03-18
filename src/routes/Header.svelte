<script>
	import { page } from '$app/stores';
	import Settings from './Settings.svelte';
</script>

<header>
	<div class="corner">
		<h1>Deciphrase</h1>
	</div>

	<nav>
		<span aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/"><span class="material-symbols-outlined">home</span></a>
		</span>
		<span aria-current={$page.url.pathname === '/leaderboard' ? 'page' : undefined}>
			<a href="/leaderboard"><span class="material-symbols-outlined">leaderboard</span></a>
		</span>
		<span><Settings /></span>
	</nav>
	
	
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 1rem;
		color: white;
	}

	
	span {
		margin: .5rem;
	}
	
	.material-symbols-outlined {
		color: white;
		font-variation-settings:
		'FILL' 0,
		'wght' 900,
		'GRAD' 0,
		'opsz' 48
	}

	.material-symbols-outlined:hover {
		font-variation-settings:
		'FILL' 1,
		'wght' 900,
		'GRAD' 0,
		'opsz' 48
	}

</style>
