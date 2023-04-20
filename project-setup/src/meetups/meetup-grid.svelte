<script>
  import MeetupItem from "./meetup-item.svelte"

  export let meetups
</script>

<section id="meetups">
  {#each meetups as meetup (meetup.id)}
    <MeetupItem {...meetup} on:toggleFavorite />
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;

    width: 100%;
  }

  @media (min-width: 768px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
