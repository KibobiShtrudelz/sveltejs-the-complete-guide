<script>
  import Cart from "./Cart/Cart.svelte"
  import Button from "./UI/Button.svelte"
  import Products from "./Products/Products.svelte"

  let isCartVisible = true
</script>

<Button on:click={() => (isCartVisible = !isCartVisible)}>Toggle Cart</Button>

{#if isCartVisible}
  <Cart />
{/if}

<Products />
