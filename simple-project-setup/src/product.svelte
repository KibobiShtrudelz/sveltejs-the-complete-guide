<script>
  import { createEventDispatcher } from "svelte"

  export let id
  export let productTitle
  export let productPrice
  export let bestseller = ""

  const dispatch = createEventDispatcher()

  const addToCart = () => dispatch("add-to-cart", { id: "p1" })

  const deleteFromCart = () => dispatch("add-to-cart", "p1")
</script>

<article>
  <h1>{productTitle}</h1>
  <small>{id}</small>

  <h2>${productPrice}</h2>

  {#if bestseller}
    <h3>{bestseller}</h3>
  {/if}

  <button on:click={addToCart}>Add to Cart</button>

  <button on:click={deleteFromCart}>Delete</button>
</article>
