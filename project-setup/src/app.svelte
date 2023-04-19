<script>
  import Header from "./ui/header.svelte"
  import Button from "./ui/button.svelte"
  import TextInput from "./ui/text-input.svelte"
  import MeetupGrid from "./meetups/meetup-grid.svelte"

  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      description:
        "In this meetup, we will have some experts that teach you how to code",
      imageUrl:
        "https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo=",
      address: "21 Nerdz Road, 32523 New York",
      contactEmail: "code@test.com",
    },
    {
      id: "m2",
      title: "Swiming Bootcamp",
      subtitle: "Learn to swim in 2 hours",
      description:
        "In this meetup, we will have some experts that teach you how to code while swiming",
      imageUrl:
        "https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo=",
      address: "21 Swim Road, 32523 New York",
      contactEmail: "code-while-swim@test.com",
    },
  ]

  let title = ""
  let subtitle = ""
  let address = ""
  let email = ""
  let description = ""
  let imageUrl = ""

  const addMeetup = () => {
    const newMeetup = {
      id: Math.ceil(Math.random() * 10000).toString(),
      title,
      subtitle,
      description,
      imageUrl:
        "https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo=",
      address,
      contactEmail: email,
    }

    meetups = [newMeetup, ...meetups]
  }
</script>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>
    <TextInput
      id="title"
      name="title"
      label="Title"
      value={title}
      on:input={e => (title = e.target.value)}
    />

    <TextInput
      id="subtitle"
      name="subtitle"
      label="Subtitle"
      value={subtitle}
      on:input={e => (subtitle = e.target.value)}
    />

    <TextInput
      id="address"
      name="address"
      label="Address"
      value={address}
      on:input={e => (address = e.target.value)}
    />

    <TextInput
      id="imageUrl"
      name="imageUrl"
      label="Image URL"
      value={imageUrl}
      on:input={e => (imageUrl = e.target.value)}
    />

    <TextInput
      type="email"
      id="email"
      name="email"
      label="E-Mail"
      value={email}
      on:input={e => (email = e.target.value)}
    />

    <TextInput
      rows={3}
      id="description"
      name="description"
      label="Description"
      value={description}
      controlType="textarea"
      on:input={e => (description = e.target.value)}
    />

    <Button type="submit" caption="Save" />
  </form>

  <MeetupGrid {meetups} />
</main>

<style>
  main {
    margin-top: 5rem;
  }

  form {
    margin: auto;
    width: 30rem;
    min-width: 90%;
  }
</style>
