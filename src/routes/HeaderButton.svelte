<script>
  import Modal from "./Modal.svelte";
  let showModal = false;
</script>

<button on:click={() => (showModal = true)}> How To Play </button>

{#if showModal}
  <Modal on:close={() => (showModal = false)}>
    <h2 slot="header">How To Play</h2>

    <p>
      This game... Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Fuga, molestiae, dolore eveniet aut debitis facere voluptatem, ad
      perferendis provident suscipit quae deserunt omnis delectus amet. Quam
      sunt perspiciatis debitis reprehenderit. Nam vero repudiandae, aut
      nesciunt itaque sed! Atque dignissimos illum itaque esse adipisci vitae
      pariatur harum cupiditate ratione nihil tempora sit omnis, velit unde
      corrupti, ex qui explicabo, illo aspernatur? Blanditiis numquam deleniti
      quidem vitae quas atque voluptas nam a amet cum iure voluptatem eligendi
      ullam perspiciatis corporis assumenda maiores, ab illum nisi laborum
      similique delectus, nihil, veritatis vel! Harum. Et, soluta, saepe quam
      pariatur harum quae tempora labore a dolore fugit repellat perspiciatis
      porro voluptatum quos repellendus omnis earum aliquam assumenda,
      repudiandae beatae debitis. Consequatur labore laboriosam quod nisi?
      Totam, expedita. Odio, facere cupiditate totam necessitatibus ducimus,
      obcaecati debitis iste modi incidunt, quisquam sint. Odit iusto placeat
      aspernatur tempora, eum fugit pariatur excepturi aperiam iste nisi neque
      in. Repudiandae.
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
    color: #3d2814;
    font-family: inherit;
    background-color: transparent;
    cursor: pointer;
    transition: 0.25s;
  }
  button:hover {
    border-color: white;
    color: white;
  }
  button:focus,
  button:focus-visible {
    outline: none;
  }
</style>