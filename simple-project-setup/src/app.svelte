<script>
  import { tick } from "svelte"
  import Modal from "./modal.svelte"
  import Product from "./product.svelte"

  const products = [
    {
      id: "1",
      productTitle: "Product Title 1",
      productPrice: 111.11,
    },
    // {
    //   id: "2",
    //   productTitle: "Product Title 2",
    //   productPrice: 222.22,
    // },
  ]
  let text = "Dis is sam dami tekst!"
  let showModal = false
  let closable = false

  const addToCart = e => {
    console.log(e.detail)
  }

  const deleteFromCart = e => {
    console.log(e.detail)
  }

  const transform = event => {
    if (event.which !== 9) return

    event.preventDefault()

    const selectionStart = event.target.selectionStart
    const selectionEnd = event.target.selectionEnd
    const value = event.target.value

    text =
      value.slice(0, selectionStart) +
      value.slice(selectionStart, selectionEnd).toUpperCase() +
      value.slice(selectionEnd)

    tick().then(() => {
      event.target.selectionStart = selectionStart
      event.target.selectionEnd = selectionEnd
    })
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

<textarea name="waza" id="waza" rows="5" on:keydown={transform}>{text}</textarea
>
