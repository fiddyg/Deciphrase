<script>
    import {sentences} from './sentences.js'
		import HowToPlay from './HowToPlay.svelte'

    let numberOfGuesses = 1;
    const maxGuesses = 5;
    let guessesRemaining = numberOfGuesses;
    let currentGuess = [];
    let rightGuessString = sentences[Math.floor(Math.random * sentences.length)];

    let cats = [
		{ name: 'Keyboard Cat' },
		{ name: 'Maru' },
		{ name: 'Henri The Existential Cat' }
	];
</script>

<main>

	<HowToPlay />

	<h2>mrodan cesnetne</h2>

	
		{#each cats as { id, name }, i}
			<div class="playingfield">
				<span class="block">
					{i + 1}: {name}
				</span>
			</div>
			
		{/each}
	
</main>

<style>
	main {
		text-align: center;
	}

	.playingfield {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>