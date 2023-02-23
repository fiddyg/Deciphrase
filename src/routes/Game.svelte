<script>
	import HowToPlay from './HowToPlay.svelte'
	import {phrases} from './phrases.js'

	let numberOfGuesses = 1;
	const maxGuesses = 5;
	let guessesRemaining = numberOfGuesses;
	let currentGuess = [];

	let block = [
		{ place: '1' },
		{ place: '2' },
		{ place: '3' },
		{ place: '4' } 
	];

	let length = phrases.length;

	let randomNumber = Math.floor(Math.random() * length)

	let randomPhrase = phrases[randomNumber] 


	const easyMode = () => {
		
	}

	const hardMode = () => {

	}
	


</script>

<main>

	<HowToPlay />

	<h2>{ randomPhrase }</h2>

	<div class="playingfield">

		{#each block as { place }}
			
				<span class="block">
					
				</span>	
			
		{/each}

	</div>

	<p></p>
	
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
		border: 2px solid black;
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: .5rem;
		font-size: 1rem;
		border-radius: 50%;
	}
</style>