<script>
  import Modal from "./Modal.svelte";
  let showModal = false;
</script>

<button on:click={() => (showModal = true)}> How To Play </button>

{#if showModal}
  <Modal on:close={() => (showModal = false)}>
    <h2 slot="header">How To Play</h2>

    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quas asperiores necessitatibus, similique velit ea, facere possimus perferendis a aut voluptatem dolorem quod dicta harum corrupti pariatur rerum, maxime cupiditate.
    </p>
  </Modal>
{/if}

<style>
  button {
    border-radius: 0;
    border: none;
    padding: none;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: transparent;
    cursor: pointer;
    padding: .5rem
  }
  button:hover {
    color: white;
    background-color: #0a4939;
    border-radius: .7rem;
    text-decoration: none;
  }
  button:focus,
  button:focus-visible {
    outline: none;
  }
</style>