<script lang="ts">
	import HowToPlay from './HowToPlay.svelte'
	import {phrases} from './phrases.js'
 
	

	let length = phrases.length;

	let randomNumber = Math.floor(Math.random() * length)

	let randomPhrase = phrases[randomNumber] 

	const rows = [
		{letter: 1},
		{letter: 2},
		{letter: 3}
	]


	const easyMode = () => {
		
	}

	const hardMode = () => {

	}


</script>

<main>

	<HowToPlay />

	<h2>{ randomPhrase }</h2>

	<div class="playingfield">

		{#each rows as row}
			<div class="block"></div>
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
		height: 25vh;
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