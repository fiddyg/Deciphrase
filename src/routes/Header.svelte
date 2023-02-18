<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import Settings from './Settings.svelte'
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<header>
	<div class='title'>
		<h2>Deciphrase</h2>
	</div>

	<div class="headerlinks link">
		<div class="home">
			<span aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">
					<span class="material-symbols-outlined">
						home
					</span>
				</a>
			</span>
		</div>

		<div class="leaderboard link">
			<span aria-current={$page.url.pathname === '/leaderboard' ? 'page' : undefined}>
				<a href="/leaderboard">
					<span class="material-symbols-outlined">
						leaderboard
					</span>
				</a>
			</span>
		</div>

		<div class="settingsicon link">
			<Settings />
		</div>
	</div>

	

</header>

<style>
	.headerlinks {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.link {
		margin: .5rem;
	}

	a:hover {
		background: transparent;
	}

	.material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
  }

  .material-symbols-outlined:hover {
    font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
  }
</style>
