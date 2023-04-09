<script>
	import { page } from '$app/stores';
	import Settings from './Settings.svelte';
	import {currentUser} from '$lib/pocketbase' 
	import {applyAction, enhance} from '$app/forms'
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

		{#if $currentUser}
				
			<form method="POST" action="/logout">
				<button><span class="material-symbols-outlined">logout</span></button>
			</form>
		{:else}
			<span aria-current={$page.url.pathname === '/register' ? 'page' : undefined}>
				<a href="/register"><span class="material-symbols-outlined">login</span></a>
			</span>
		{/if}

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

	a {
		text-decoration: none;
	}

</style>
