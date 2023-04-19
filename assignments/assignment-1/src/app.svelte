<script>
  import NestedComponent from './nested-component.svelte';

  let value = '';
</script>

<h1>Assignment 1</h1>

<input type='text' bind:value="{value}" />

<NestedComponent {value} />
