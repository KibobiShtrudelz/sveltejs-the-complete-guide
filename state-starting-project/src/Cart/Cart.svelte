<script>
  import { onDestroy } from 'svelte'

  import CartItem from './CartItem.svelte'

  import { cartStore } from './cart-store'
  import { timerStore } from '../timer-store'

  // let items

  // const unsubscribe = cartStore.subscribe(cartItems => {
  //   items = cartItems
  // })

  const unsubscribe = timerStore.subscribe(count => {
    console.log(`Cart: ${count}`)
  })

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe()
    }
  })
</script>

<section>
  <h1>Cart</h1>

  <ul>
    {#each $cartStore as item (item.id)}
      <CartItem id={item.id} title={item.title} price={item.price} />
    {:else}
      <p>No items in cart yet!</p>
    {/each}
  </ul>
</section>

<style>
  section {
    width: 30rem;
    max-width: 90%;
    margin: 2rem auto;
    border-bottom: 2px solid #ccc;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
