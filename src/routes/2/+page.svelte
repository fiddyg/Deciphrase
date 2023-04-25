<script>
	import Game from "../Game.svelte";
	import { mediumCorrectPhrases, mediumPhrases } from "../phrases";
</script>

<main>
	<Game prev='/1' next='/3' goToPrev='1' goToNext='3' maxScore='200' title='2: Medium' subtract='40' phrasesChoose={mediumPhrases} correctPhrasesChoose={mediumCorrectPhrases}/>
</main>