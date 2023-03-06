<script lang="ts">
	import HowToPlay from './HowToPlay.svelte'
	import {phrases} from './phrases.js'
 
	function shuffle(array) {
		let currentIndex = array.length, randomIndex;

		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex--

			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
		}

		return array
	}

	shuffle(phrases)

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

		
		<p>{phrases.join(" ")}</p>

	</div>

	
</main>

<style>
	main {
		text-align: center;
	}

	.playingfield {
		display: flex;
		align-items: center;
		height: 100vh;
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