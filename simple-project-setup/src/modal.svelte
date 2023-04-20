<script>
  import {
    onMount,
    onDestroy,
    afterUpdate,
    beforeUpdate,
    createEventDispatcher,
  } from "svelte"

  const dispatch = createEventDispatcher()

  let agreed = false
  let autoscroll = false

  onMount(() => {
    console.log("onMount")
  })

  onDestroy(() => {
    console.log("onDestroy")
  })

  beforeUpdate(() => {
    console.log("beforeUpdate")
    autoscroll = agreed
  })

  afterUpdate(() => {
    console.log("afterUpdate")
    if (autoscroll) {
      const modal = document.querySelector(".modal")
      modal.scrollTo(0, modal.scrollHeight)
    }
  })

  console.log("Script executed!")
</script>

<div
  class="backdrop"
  on:click={() => dispatch("cancel")}
  on:keydown={() => dispatch("cancel")}
/>

<div class="modal">
  <header>
    <slot name="header" />
  </header>

  <div class="content">
    <slot />
  </div>

  <div class="disclaimer">
    <p>Before you puke, you need to agree to our terms!</p>

    <button on:click={() => (agreed = true)}>Agree</button>
  </div>

  <footer>
    <slot name="footer" didAgree={agreed}>
      <button disabled={!agreed} on:click={() => dispatch("close")}
        >Close</button
      >
    </slot>
  </footer>
</div>

<style>
  header {
    border-bottom: 2px solid #ccc;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    padding: 1rem;
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    max-height: 30vh;
    background: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: scroll;
  }
</style>
