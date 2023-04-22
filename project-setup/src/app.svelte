<script>
  import Header from './ui/header.svelte'
  import Button from './ui/button.svelte'
  import MeetupGrid from './meetups/meetup-grid.svelte'
  import EditMeetup from './meetups/edit-meetup.svelte'

  let meetups = [
    {
      id: 'm1',
      title: 'Coding Bootcamp',
      subtitle: 'Learn to code in 2 hours',
      description:
        'In this meetup, we will have some experts that teach you how to code',
      imageUrl:
        'https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo=',
      address: '21 Nerdz Road, 32523 New York',
      contactEmail: 'code@test.com',
      isFavorite: false
    },
    {
      id: 'm2',
      title: 'Swiming Bootcamp',
      subtitle: 'Learn to swim in 2 hours',
      description:
        'In this meetup, we will have some experts that teach you how to code while swiming',
      imageUrl:
        'https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo=',
      address: '21 Swim Road, 32523 New York',
      contactEmail: 'code-while-swim@test.com',
      isFavorite: false
    }
  ]

  let editMode

  const addMeetup = event => {
    const newMeetup = {
      title: event.detail.title,
      address: event.detail.address,
      subtitle: event.detail.subtitle,
      imageUrl: event.detail.imageUrl,
      description: event.detail.description,
      contactEmail: event.detail.contactEmail
    }

    meetups = [newMeetup, ...meetups]

    editMode = null
  }

  const toggleFavorite = event => {
    const id = event.detail
    const updatedMeetup = { ...meetups.find(m => m.id === id) }
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite
    const meetupIdx = meetups.findIndex(m => m.id === id)
    const updatedMeetups = [...meetups]
    updatedMeetups[meetupIdx] = updatedMeetup
    meetups = updatedMeetups
  }

  const cancelEdit = () => {
    editMode = null
  }
</script>

<Header />

<main>
  <div class="meetup-controls">
    <Button on:click={() => (editMode = 'add')}>New Meetup</Button>
  </div>

  {#if editMode == 'add'}
    <EditMeetup on:save={addMeetup} on:cancel={cancelEdit} />
  {/if}

  <MeetupGrid {meetups} on:toggleFavorite={toggleFavorite} />
</main>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }
</style>
