<script>
  export let value = '';

  $: shouldHighlight = value.includes('!');
</script>

<style>
  .has-exclamation-mark {
    color: red;
  }
</style>

<h1 class:has-exclamation-mark="{shouldHighlight}">{value}</h1>
