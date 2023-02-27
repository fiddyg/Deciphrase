<script>
	import HowToPlay from './HowToPlay.svelte'
	import {phrases} from './phrases.js'
	import {writable} from 'svelte/store'
 
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

	let characterLength = 6

	function createGrid() {
		const grid = []

		for(let i = 0; i < 1, i++) {
			grid.push([])
			
			for(let x = 0, x < characterLength, x++) {
				grid[i][x] = ''
			}
		}

		return grid
	}

	const board = writable(createGrid())
	


</script>

<main>

	<HowToPlay />

	<h2>{ randomPhrase }</h2>

	<div class="playingfield">

		{each $board as column}
			<div class="row"></div>
		{/each}

	</div>

	<p>{phrases.join("")}</p>
	
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