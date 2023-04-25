<script>
	import Game from "../Game.svelte";
	import { easyPhrases, easyCorrectPhrases } from "../phrases";
</script>

<main>
	<Game prev='/3' next='/2' goToPrev='3' goToNext='2' maxScore='100' title='1: Easy' subtract='20' phrasesChoose={easyPhrases} correctPhrasesChoose={easyCorrectPhrases}/>
</main>