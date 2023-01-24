<script>
	import {sentences} from './sentences.js'
	import HowToPlay from './HowToPlay.svelte'

	let numberOfGuesses = 1;
	const maxGuesses = 5;
	let guessesRemaining = numberOfGuesses;
	let currentGuess = [];
	

	let block = [
		{ place: '1' },
		{ place: '2' },
		{ place: '3' }
	];

	let length = sentences.length;

	let randomNumber = Math.floor(Math.random() * length + 1)

	let randomSentence = sentences[randomNumber] 


	

		
</script>

<main>

	<HowToPlay />

	<h2>mrodan cesnetne</h2>

	<div class="playingfield">

		{#each block as { place }}
			
				<span class="block">
					{ randomSentence }
				</span>	
			
		{/each}

	</div>

	<p>{randomNumber}</p>
	<p>{randomSentence}</p>
	
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
		/* width: 2rem;
		height: 2rem; */
		display: flex;
		align-items: center;
		justify-content: center;
		margin: .5rem;
		font-size: 1rem;
		background: black;
	}
</style>