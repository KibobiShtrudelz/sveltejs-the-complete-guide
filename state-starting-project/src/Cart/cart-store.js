import { writable } from 'svelte/store'

export const cartStore = writable([
  {
    id: 'p3',
    title: 'Test 3',
    price: 9.99
  },
  {
    id: 'p4',
    title: 'Test 4',
    price: 9.99
  }
])

export const customCart = {
  subscribe: cartStore.subscribe,

  addItem: ({ id, title, price }) =>
    cartStore.update(items =>
      items.find(item => item.id === id)
        ? [...items]
        : [...items, { id, title, price }]
    ),

  removeItem: id =>
    cartStore.update(cartItems => cartItems.filter(cI => cI.id !== id))
}

export default customCart
