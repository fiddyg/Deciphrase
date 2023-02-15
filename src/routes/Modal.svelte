<script>
  import { createEventDispatcher, onDestroy } from "svelte";

  const dispatch = createEventDispatcher();
  const close = () => dispatch("close");

  let modal;

  const handle_keydown = (e) => {
    if (e.key === "Escape") {
      close();
      return;
    }

    if (e.key === "Tab") {
      // trap focus
      const nodes = modal.querySelectorAll("*");
      const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey) index = 0;

      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;

      tabbable[index].focus();
      e.preventDefault();
    }
  };

  const previously_focused =
    typeof document !== "undefined" && document.activeElement;
</script>

<svelte:window on:keydown={handle_keydown} />

<div class="modal-background" on:click={close} />

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
  <slot name="header" />

  <slot />

  <!-- svelte-ignore a11y-autofocus -->
  <button autofocus on:click={close}>Close</button>
</div>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(100vw - 4em);
    max-width: 32em;
    max-height: calc(100vh - 4em);
    overflow: auto;
    transform: translate(-50%, -50%);
    padding: 1em;
    border-radius: 0.2em;
    background: url(https://img.rawpixel.com/private/static/images/website/2022-05/px650847-image-kwvvah0o.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=c0330b10186d1c1401512f3165107693);
    border: 5px solid white;
    text-align: left;
  }

  button {
    border-radius: 0;
    border: none;
    padding: .5rem;
    margin: 1em;
    font-size: 1em;
    font-weight: 500;
    color: black;
    font-family: inherit;
    cursor: pointer;
    text-align: center;
    background: none;
  }

  button:hover {
    color: white;
    background-color: black;
    border-radius: .7rem;
    text-decoration: none;
  }

  button:focus,
  button:focus-visible {
    outline: none;
  }
</style>