<script>
	import { page } from '$app/stores';
	import Settings from './Settings.svelte';
	import {currentUser} from '$lib/pocketbase' 
	import {applyAction, enhance} from '$app/forms'
</script>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

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

		<!-- {#if $currentUser}
				
			<form method="POST" action="/logout" use:enhance{() => {
				pb.authStore.clear()
				return async ({result}) => {
					await applyAction(result)
				}
			}}> 
				<button><span class="material-symbols-outlined">logout</span></button>
			</form>
		{:else} -->
			<span aria-current={$page.url.pathname === '/signup' ? 'page' : undefined}>
				<a href="/signup"><span class="material-symbols-outlined">login</span></a>
			</span>
		<!-- {/if} -->

		<!-- <span><Settings /></span> -->
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
