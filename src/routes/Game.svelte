<script lang="ts">
	import HowToPlay from './HowToPlay.svelte'
	import {phrases, correctPhrase1} from './phrases.js'
	import Swal from 'sweetalert2'
	import Guesses from './Guesses.svelte';
	

	let length = phrases.length;

	let randomNumber = Math.floor(Math.random() * length)

	let randomPhrase = phrases[randomNumber] 

	const rows = [
		{letter: 1},
		{letter: 2},
		{letter: 3}
	]

	export let guessesList = []

	let maxGuesses = 10

	let score = 100

	let newScore = score - 10

	let input
	
	function click() {
		if (input.value == correctPhrase1) 
			Swal.fire({
				title: 'Correct!',
				text: 'You guessed correctly!',
				icon: 'success',
				confirmButtonText: 'Nice!',
				confirmButtonColor: 'black',
			}) .then((result) => {
				if (result.isConfirmed) window.location.reload()
			})
		else if (input.value === '')
			Swal.fire({
				title: 'Type Something You Funny',
				icon: 'warning',
				confirmButtonText: 'Go type something',
				confirmButtonColor: 'black'
			})
		else if (input.value !== correctPhrase1)
			Swal.fire({
				title: 'Wrong!',
				text: `Try again`,
				icon: 'error',
				confirmButtonText: 'Try Again',
				confirmButtonColor: 'black'
			})
			
		else if (maxGuesses = 0)
			Swal.fire({
				title: 'Wrong!',
				text: `The correct answer is ${correctPhrase1.toUpperCase()}. You guessed ${input.value.toUpperCase()}`,
				icon: 'error',
				confirmButtonText: 'Replay?',
				confirmButtonColor: 'black'
			}) .then((result) => {
				if (result.isConfirmed) window.location.reload()
			})
		
		else 
			console.log('somethings messed up')
	}

</script>

<main>


	<HowToPlay />

	<h2>{ randomPhrase }</h2>
	
	<form>
		<input bind:this={input} type="text" placeholder="Enter Your Guess">

		<button class="btnForm" on:click={click}>Submit</button>
	</form>
	
	<div class="below">
		<Guesses />

		<h3>Guesses left: {maxGuesses}</h3>

		<h3>Score: {score}</h3>
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
		color: white;
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
		color: white;
		border: 5px solid white;
	}

	input::placeholder {
		color: white;
		text-align: center;
	}

	.btnForm {
		background-color: white;
		color: black;
		border-radius: 0%;
		margin: 1rem;
		height: 5rem;
		width: 10rem;
		font-size: 2rem;
		border: 5px solid white;
	}

	.btnForm:hover {
		opacity: .8;
	}

	.below {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>