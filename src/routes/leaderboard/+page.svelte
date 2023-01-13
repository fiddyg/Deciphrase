<script>	
	let players = [
		{ img: 'profileImg/me.png', name: 'Spencer Gale', points: 25 },
		{ name: 'Maru' },
		{ name: 'Henri The Existential Cat' }
	];
</script>

<main>

<ul>
	{#each players as { img, name, points }, i}
		<div class="person">
			<span>
				<h4>{ i + 1 }: </h4>
				{img} 
				<h4>{name}</h4> 
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
	}

	span {
		margin: 0 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h4, p {
		display: inline;
	}


</style>