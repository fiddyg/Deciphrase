<script>
  import Modal from "./Modal.svelte";
  let showModal = false;
</script>

<button on:click={() => (showModal = true)}> 
  Settings
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
    margin: 2rem;
  }

  button:hover {
    background-color: #0a4939;
    border-radius: .7rem;
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
</style>