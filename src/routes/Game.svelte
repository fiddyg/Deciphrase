<script>
    import {sentences} from './sentences.js'

    let numberOfGuesses = 1;
    const maxGuesses = 5;
    let guessesRemaining = numberOfGuesses;
    let currentGuess = [];
    let rightGuessString = sentences[Math.floor(Math.random * sentences.length)];

    let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
</script>

<main>

<ul>
	{#each cats as { id, name }, i}
		<li><a target="_blank" href="https://www.youtube.com/watch?v={id}" rel="noreferrer">
			{i + 1}: {name}
		</a></li>
	{/each}
</ul>
</main>

<style>

</style>