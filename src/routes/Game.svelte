<script lang="ts">
	import { phrases, correctPhrases } from './2/mediumPhrases.js';
	import Swal from 'sweetalert2';
	import { page } from '$app/stores';


	let length = phrases.length;

	let randomNumber = Math.floor(Math.random() * length)

	let randomPhrase = phrases[randomNumber].join(' ')

	let correctPhrase = correctPhrases[randomNumber]

	let maxGuesses = 5
	
	let score

    export let maxScore

    score = maxScore

    export let subtract
	
	let input

	let mediumScore: any = []

	let mode2 = ['Medium']
	
	const click = () => {
		if (input.value === correctPhrase) {
			Swal.fire({
				title: 'Correct!',
				text: `You guessed correctly! It took you ${6 - maxGuesses} tries. Your score is ${score}`,
				icon: 'success',
				confirmButtonText: 'Nice!',
				confirmButtonColor: 'black',
			}) .then((result) => {
				if (result.isConfirmed) window.location.reload()
			})

			mediumScore.push(score)
		}
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

			score = score - subtract

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

    export let prev
    
    export let next

    export let goToPrev

    export let goToNext

    export let title

    

</script>
	

<main>

	<div class="header">
		<span class="tooltip">
			
				<a href={prev}><span class="material-symbols-outlined">arrow_back_ios</span></a>
			

			<span class="tooltiptext">Go to level {goToPrev}</span>
		</span>

		<span class="tooltip">
			
				<a href={next}><span class="material-symbols-outlined">arrow_forward_ios</span></a>

			<span class="tooltiptext">Go to level {goToNext}</span>
		</span>
	</div>

	<h3>Level {title}</h3>

	<h2>{ randomPhrase }</h2>
	
	<form>
		<input bind:this={input} type="text" placeholder="Enter Your Guess">

		<button class="btnForm" on:click={click}>Submit</button>
	</form>
	
	<div class="below">

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
		text-align: center;
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

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.tooltip {
		position: relative;
		display: inline-block;
	}

	.tooltip .tooltiptext {
		visibility: hidden;
		width: 10rem;
		background-color: white;
		color: black;
		border-radius: 10px;
		padding: .5rem;
		text-align: center;
		position: relative;
		z-index: 1;
		font-size: 1rem;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
	}
</style>