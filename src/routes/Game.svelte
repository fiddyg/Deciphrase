<script lang="ts">
	import HowToPlay from './HowToPlay.svelte'
	import {phrases, correctPhrase1} from './phrases.js'
	import Swal from 'sweetalert2'
	

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
			Swal.fire({
				title: 'Correct!',
				text: 'You guessed correctly!',
				icon: 'success',
				confirmButtonText: 'Nice!',
				confirmButtonColor: 'black'
			})
		else if (input.value === '')
			Swal.fire({
				title: 'Type Something You Funny',
				icon: 'warning',
				confirmButtonText: 'Go type something',
				confirmButtonColor: 'black'
			})
		else
			Swal.fire({
				title: 'Wrong!',
				text: `The correct answer is ${correctPhrase1.toUpperCase()}. You guessed ${input.value.toUpperCase()}`,
				icon: 'error',
				confirmButtonText: 'Try Again',
				confirmButtonColor: 'black'
			})
	}

</script>

<main>


	<HowToPlay />

	<h2>{ randomPhrase }</h2>
	
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

	h2 {
		font-size: 5rem;
	}

	form {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 2rem;
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
		height: 5rem;
		width: 7rem;
		font-size: 2rem;
	}
</style>