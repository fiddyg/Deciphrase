<script>
    import {sentences} from './sentences.js'
		import HowToPlay from './HowToPlay.svelte'

    let numberOfGuesses = 1;
    const maxGuesses = 5;
    let guessesRemaining = numberOfGuesses;
    let currentGuess = [];
    let rightGuessString = sentences[Math.floor(Math.random * sentences.length)];

    let sentence = [
		{ letter: 'a' },
		{ letter: 'b' },
		{ letter: 'c' }
	];
</script>

<main>

	<HowToPlay />

	<h2>mrodan cesnetne</h2>

	<div class="playingfield">

		{#each sentence as { id, letter }, i}
			
				<span class="block">
					{name}
				</span>	
			
		{/each}

	</div>
	
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
	
	.block {
		border: 2px solid white;
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: .5rem;
		font-size: 1rem;
	}
</style>