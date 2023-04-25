<script>
	import Game from "../Game.svelte";
	import { hardCorrectPhrases, hardPhrases } from "../phrases";
</script>

<main>
	<Game prev='/2' next='/1' goToPrev='2' goToNext='1' maxScore='300' title='3: Hard' subtract='60' phrasesChoose={hardPhrases} correctPhrasesChoose={hardCorrectPhrases}/>
</main>