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
