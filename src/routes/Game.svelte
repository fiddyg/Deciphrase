<script lang="ts">
	import HowToPlay from './HowToPlay.svelte'
	import Login from './SignUp.svelte'
	import {phrases, correctPhrases, correctPhrase1} from './phrases.js'
	import Swal from 'sweetalert2'
	import Guesses from './Guesses.svelte';
	

	let length = phrases.length;

	let randomNumber = Math.floor(Math.random() * length)

	let randomPhrase = phrases[randomNumber] 

	let correctPhrase = correctPhrases[randomNumber]

	let maxGuesses = 5
	
	let score = 100
	
	let input
	
	function click() {
		if (input.value === correctPhrase) 
			Swal.fire({
				title: 'Correct!',
				text: `You guessed correctly! It took you ${6 - maxGuesses} tries. Your score is ${score}`,
				icon: 'success',
				confirmButtonText: 'Nice!',
				confirmButtonColor: 'black',
			}) .then((result) => {
				if (result.isConfirmed) window.location.reload()
			})
		else if (input.value === '')
			Swal.fire({
				title: 'Type Something, You Funny',
				icon: 'warning',
				confirmButtonText: 'Go type something',
				confirmButtonColor: 'black'
			})
		else if (input.value !== correctPhrase) {
			Swal.fire({
				title: 'Wrong!',
				text: `Try again`,
				icon: 'error',
				confirmButtonText: 'Try Again',
				confirmButtonColor: 'black'
			})
			
			maxGuesses--

			score = score - 20

			if (maxGuesses === 0)
				Swal.fire({
					title: 'Wrong!',
					text: `The correct answer is ${correctPhrase.toUpperCase()}. You guessed ${input.value.toUpperCase()}`,
					icon: 'error',
					confirmButtonText: 'Replay?',
					confirmButtonColor: 'black'
				}) .then((result) => {
					if (result.isConfirmed) window.location.reload()
				})
			
		}
			
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
		padding: .5rem;
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