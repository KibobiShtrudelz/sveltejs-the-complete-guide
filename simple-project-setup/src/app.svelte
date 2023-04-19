<script>
  import Modal from "./modal.svelte"
  import Product from "./product.svelte"

  const products = [
    {
      id: "1",
      productTitle: "Product Title 1",
      productPrice: 111.11,
    },
    {
      id: "2",
      productTitle: "Product Title 2",
      productPrice: 222.22,
    },
  ]
  let showModal = false
  let closable = false

  const addToCart = e => {
    console.log(e.detail)
  }

  const deleteFromCart = e => {
    console.log(e.detail)
  }
</script>

{#each products as product (product.id)}
  <Product {...product} on:add-to-cart={addToCart} on:delete={deleteFromCart} />
{/each}

<button on:click={() => (showModal = true)}>Show Modal</button>

{#if showModal}
  <Modal
    let:didAgree={closable}
    on:close={() => (showModal = false)}
    on:cancel={() => (showModal = false)}
  >
    <h1 slot="header">Hi!</h1>

    <p>This works!</p>

    <button
      slot="footer"
      disabled={!closable}
      on:click={() => (showModal = false)}>Confirm</button
    >
  </Modal>
{/if}
