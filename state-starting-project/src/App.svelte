<script>
  // import { onDestroy } from 'svelte'
  import Cart from './Cart/Cart.svelte'
  import Button from './UI/Button.svelte'
  import Products from './Products/Products.svelte'

  import { timerStore } from './timer-store'

  let isCartVisible = true

  // const unsubscribe = timerStore.subscribe(count => {
  //   console.log(`App: ${count}`)
  // })

  // onDestroy(() => {
  //   unsubscribe?.()
  // })
</script>

<Button on:click={() => (isCartVisible = !isCartVisible)}>Toggle Cart</Button>

{#if isCartVisible}
  <Cart />
{/if}

<Products />

<p>Count: {$timerStore}</p>
