<script>
	import mode1 from '../1/+page.svelte'	
	import mode2 from '../2/+page.svelte'	
	import mode3 from '../3/+page.svelte'
	import name from '../RandomName.svelte'	

	let players = [
		{ name: 'Spencer Gale', points: 25 },
		{ name: 'Truman Kington', points: 20 },
		{ name: 'Jesse Speir', points: 15 }
	];
	
	// let num = players.sort(function(a, b) {
    //     return b - a 
    // })

</script>

<svelte:head>
	<title>Leaderboard</title>
	
</svelte:head>

<main>

<ul>
	{#each players as { name, points }, i}
		<div class="person">
			<span>
				<h4>{ i + 1 }</h4>
				<h4 class="name">{name}</h4> 
				<p>{points}</p>
			</span>
		</div>

	{/each}
</ul>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.person {
		border: 2px solid white;
		width: 100%;
		margin: 1rem 0;
	}

	.person:nth-last-child(n) {
		margin-bottom: 0;
	}

	span {
		margin: 0 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h4, p {
		display: inline;
		font-size: 2rem;
	}

	.name {
		margin: 2rem;
	}


</style>