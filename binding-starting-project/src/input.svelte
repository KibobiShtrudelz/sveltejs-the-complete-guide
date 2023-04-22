<script>
  export let value

  export const empty = () => (value = '')
</script>

<input type="text" bind:value />

<style>
  input {
    border-radius: 4px;
  }
</style>
