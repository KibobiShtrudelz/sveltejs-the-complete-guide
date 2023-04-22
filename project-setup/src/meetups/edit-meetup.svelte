<script>
  import { createEventDispatcher } from 'svelte'

  import Modal from '../ui/modal.svelte'
  import Button from '../ui/button.svelte'
  import TextInput from '../ui/text-input.svelte'

  import { isEmpty, isEmailValid } from '../helpers/validation'

  let title = ''
  let address = ''
  let subtitle = ''
  let description = ''
  let contactEmail = ''
  let imageUrl =
    'https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo='

  const dispatch = createEventDispatcher()

  $: isTitleValid = !isEmpty(title)
  $: isSubtitleValid = !isEmpty(subtitle)
  $: isAddressValid = !isEmpty(address)
  $: isContactEmailValid = !isEmpty(contactEmail) && isEmailValid(contactEmail)
  $: isDescriptionValid = !isEmpty(description)
  $: isImageUrlValid = !isEmpty(imageUrl)
  $: isFormValid =
    isTitleValid &&
    isSubtitleValid &&
    isAddressValid &&
    isContactEmailValid &&
    isDescriptionValid &&
    isImageUrlValid

  const submitForm = () =>
    dispatch('save', {
      title,
      address,
      subtitle,
      imageUrl,
      description,
      contactEmail
    })

  const cancel = () => dispatch('cancel')
</script>

<Modal title="Edit Meetup Data" on:cancel>
  <form on:submit|preventDefault={submitForm}>
    <TextInput
      id="title"
      name="title"
      label="Title"
      value={title}
      valid={isTitleValid}
      validityMessage="Please enter a title"
      on:input={e => (title = e.target.value)}
    />

    <TextInput
      id="subtitle"
      name="subtitle"
      label="Subtitle"
      value={subtitle}
      valid={isSubtitleValid}
      validityMessage="Please enter a subtitle"
      on:input={e => (subtitle = e.target.value)}
    />

    <TextInput
      id="address"
      name="address"
      label="Address"
      value={address}
      valid={isAddressValid}
      validityMessage="Please enter an address"
      on:input={e => (address = e.target.value)}
    />

    <TextInput
      id="imageUrl"
      name="imageUrl"
      value={imageUrl}
      label="Image URL"
      valid={isImageUrlValid}
      validityMessage="Please enter an image URL"
      on:input={e => (imageUrl = e.target.value)}
    />

    <TextInput
      id="email"
      type="email"
      name="email"
      label="E-Mail"
      value={contactEmail}
      valid={isContactEmailValid}
      validityMessage="Please enter a valid email"
      on:input={e => (contactEmail = e.target.value)}
    />

    <TextInput
      rows={3}
      id="description"
      name="description"
      label="Description"
      controlType="textarea"
      valid={isDescriptionValid}
      validityMessage="Please enter a description"
      bind:value={description}
    />
  </form>

  <div slot="footer">
    <Button mode="outline" on:click={submitForm}>Cancel</Button>

    <Button disabled={!isFormValid} on:click={cancel}>Save</Button>
  </div>
</Modal>

<style>
  form {
    width: 100%;
  }
</style>
