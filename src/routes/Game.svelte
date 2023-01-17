<script>
    import {sentences} from './sentences.js'

    let numberOfGuesses = 1;
    const maxGuesses = 5;
    let guessesRemaining = numberOfGuesses;
    let currentGuess = [];
    let rightGuessString = sentences[Math.floor(Math.random * sentences.length)];

    let cats = [
		{ name: 'Keyboard Cat' },
		{ name: 'Maru' },
		{ name: 'Henri The Existential Cat' }
	];
</script>

<main>

<ul>
	{#each cats as { id, name }, i}
		<li>
			{i + 1}: {name}
		</li>
	{/each}
</ul>
</main>

<style>

</style>