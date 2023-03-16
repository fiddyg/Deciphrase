<script>
  import Modal from "./Modal.svelte";
  let showModal = false;
</script>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<button on:click={() => (showModal = true)}> 
  <span class="material-symbols-outlined">
    settings
  </span>
</button>


{#if showModal}
  <Modal on:close={() => (showModal = false)}>
    <h2 slot="header">Settings</h2>

    <div class="content">
      <p>Hard Mode</p>
    </div>
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
    padding: .5rem;
  }

  button:focus,
  button:focus-visible {
    outline: none;
  }

  h2 {
    text-align: center;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
  }

  .material-symbols-outlined:hover {
    font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
  }
</style>