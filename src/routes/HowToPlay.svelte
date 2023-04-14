<script>
  import Modal from "./Modal.svelte";
  let showModal = false;
</script>

<button on:click={() => (showModal = true)}> How To Play </button>

{#if showModal}
  <Modal on:close={() => (showModal = false)}>
    <h2 slot="header">How To Play</h2>

    <h3>
      Deciphrase is a word-unscrambling game. The objective is to decipher the given phrase in the least amount of guesses. You are given 5 guesses, and 100 total points. Once you are done with the level, you can click on the arrows to go to a new level. Simply choose a level, and you're off to the races!
    </h3>
  </Modal>
{/if}

<style>
  button {
    border-radius: 0;
    border: none;
    padding: none;
    font-size: 1em;
    font-weight: 900;
    font-family: inherit;
    background-color: transparent;
    cursor: pointer;
    padding: .5rem;
  }
  button:hover {
    color: black;
    background-color: white;
    border-radius: .7rem;
    text-decoration: none;
  }
  button:focus,
  button:focus-visible {
    outline: none;
  }

  h3 {
    margin: 2rem;
  }
</style>