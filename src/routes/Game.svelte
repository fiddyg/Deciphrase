<script lang="ts">
	import HowToPlay from './HowToPlay.svelte'
	import {phrases, correctPhrase1} from './phrases.js'
	

	let length = phrases.length;

	let randomNumber = Math.floor(Math.random() * length)

	let randomPhrase = phrases[randomNumber] 

	const rows = [
		{letter: 1},
		{letter: 2},
		{letter: 3}
	]

	let input
	
	function click() {
		if (input.value == correctPhrase1) 
			alert('Correct!')
		else if (input.value === '')
			alert('Type something you funny!')
		else
			alert(`Wrong! The correct phrase is ${correctPhrase1}`)
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
	
	<form>
		<input bind:this={input} type="text" placeholder="Enter Your Guess">

		<button class="btnForm" on:click={click}>Submit</button>
	</form>
	
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

	form {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	input {
		width: 20rem;
		height: 5rem;
		font-size: 2rem;
		background-color: transparent;
		color: black;
		border: 5px solid black;
	}

	.btnForm {
		background-color: black;
		color: white;
		border-radius: 0%;
		margin: 1rem;
	}
</style>