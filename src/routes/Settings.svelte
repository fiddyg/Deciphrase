<script>
  import Modal from "./Modal.svelte";
  let showModal = false;
</script>

<button on:click={() => (showModal = true)}> <span class="material-symbols-outlined">
Settings
</span> </button>


{#if showModal}
  <Modal on:close={() => (showModal = false)}>
    <h2 slot="header">Settings</h2>

    <p>
      Hard Mode
    </p>
  </Modal>
{/if}

<style>
  button {
    border-radius: 0;
    border: none;
    padding: none;
    font-size: 1em;
    background-color: transparent;
    cursor: pointer;
  }

  button:focus,
  button:focus-visible {
    outline: none;
  }

  .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
  }

  .material-symbols-outlined:hover {
    color: #0a4939;;
    font-variation-settings:
    'FILL' 1
  }

</style>