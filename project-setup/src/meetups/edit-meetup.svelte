<script>
  import { createEventDispatcher } from "svelte"

  import Button from "../ui/button.svelte"
  import TextInput from "../ui/text-input.svelte"

  let title = ""
  let subtitle = ""
  let address = ""
  let email = ""
  let description = ""
  let imageUrl = ""

  const dispatch = createEventDispatcher()

  const submitForm = () => {
    dispatch("save", {
      email,
      title,
      address,
      subtitle,
      imageUrl,
      description,
    })
  }
</script>

<form on:submit|preventDefault={submitForm}>
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

<style>
  form {
    margin: auto;
    width: 30rem;
    min-width: 90%;
  }
</style>
