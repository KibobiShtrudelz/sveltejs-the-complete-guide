<script>
  // import { onDestroy } from "svelte"
  import Button from "../UI/Button.svelte"

  import { cartStore } from "../Cart/cart-store"
  import { productsStore } from "../Products/products-store"

  export let id
  export let title
  export let price

  let isDescriptionVisible = false
  let description = "Not available!"

  // let fetchedProducts = []
  // const unsubscribe = productsStore.subscribe(products => {
  //   fetchedProducts = products
  // })

  function displayDescription() {
    isDescriptionVisible = !isDescriptionVisible
    // const fetchedProduct = fetchedProducts.find(fP => fP.id === id)
    // description = fetchedProduct.description

    const unsubscribe = productsStore.subscribe(products => {
      const product = products.find(fP => fP.id === id)
      description = product.description
    })

    unsubscribe?.()
  }

  function removeFromCart() {
    cartStore.update(cartItems => cartItems.filter(cI => cI.id !== id))
  }

  // onDestroy(() => {
  //   unsubscribe?.()
  // })
</script>

<li>
  <h1>{title}</h1>

  <h2>{price}</h2>

  <Button mode="outline" on:click={displayDescription}>
    {isDescriptionVisible ? "Hide Description" : "Show Description"}
  </Button>

  <Button on:click={removeFromCart}>Remove from Cart</Button>

  {#if isDescriptionVisible}
    <p>{description}</p>
  {/if}
</li>

<style>
  li {
    margin: 1rem 0;
    border-radius: 5px;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }

  h1,
  h2 {
    font-size: 1rem;
    margin: 0;
  }

  h2 {
    color: #494949;
    margin-bottom: 1rem;
  }
</style>
