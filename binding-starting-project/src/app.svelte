<script>
  import Input from './input.svelte'
  import Toggle from './toggle.svelte'
  import { isEmailValid } from './validation'

  let val = ''
  // let value = 'Wazaaaa'
  // let value1 = 'Pecito'
  // let value2 = 'Pepone'
  let price = 0
  let selectedOption = 1
  let agreed
  let favColor = 'red'
  let favColorCheck = ['green']
  let selected = 'blue'
  let usernameInput = ''
  let inputRef = null
  let email = ''
  let isFormValid = false

  $: if (isEmailValid(email)) {
    isFormValid = true
  } else {
    isFormValid = false
  }

  $: console.log('val >>>', val)
  $: console.log('price >>>', price)
  $: console.log('agreed >>>', agreed)
  $: console.log('favColor >>>', favColor)
  $: console.log('selected >>>', selected)
  $: console.log('inputRef >>>', inputRef)
  $: console.log('favColorCheck >>>', favColorCheck)
  $: console.log('selectedOption >>>', selectedOption)
  // $: console.log('value >>>', value)
  // $: console.log('value 1 >>>', value1)
  // $: console.log('value 2 >>>', value2)

  const setValue = event => {
    val = event.target.value
  }

  const saveData = () => {
    console.log(usernameInput.value)
    inputRef.empty()
  }
</script>

<!-- <input type="text" bind:value />

<input type="text" value={value1} on:input={setValue} />

<input type="text" bind:value={value2} /> -->

<Input bind:value={val} bind:this={inputRef} />

<Toggle bind:chosenOption={selectedOption} />

<input type="number" bind:value={price} />

<label for="chikidi-check">
  <input type="checkbox" id="chikidi-check" bind:checked={agreed} />
  Agree to terms?
</label>

<h1>Favorie colour radios?</h1>
<label for="radio-gaga">
  <input
    type="radio"
    id="radio-gaga"
    name="colour"
    value="red"
    bind:group={favColor}
  />
  Red
</label>

<label for="radio-gaga">
  <input
    type="radio"
    id="radio-gaga"
    name="colour"
    value="green"
    bind:group={favColor}
  />
  Green
</label>

<label for="radio-gaga">
  <input
    type="radio"
    id="radio-gaga"
    name="colour"
    value="blue"
    bind:group={favColor}
  />
  Blue
</label>

<h1>Favorite colour checkbox?</h1>
<label for="checkbox-gaga">
  <input
    type="checkbox"
    id="checkbox-gaga"
    name="colour"
    value="red"
    bind:group={favColorCheck}
  />
  Red
</label>

<label for="checkbox-gaga">
  <input
    type="checkbox"
    id="checkbox-gaga"
    name="colour"
    value="green"
    bind:group={favColorCheck}
  />
  Green
</label>

<label for="checkbox-gaga">
  <input
    type="checkbox"
    id="checkbox-gaga"
    name="colour"
    value="blue"
    bind:group={favColorCheck}
  />
  Blue
</label>

<select bind:value={selected}>
  <option value="green">Green</option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
</select>

<hr />

<input type="text" bind:this={usernameInput} />
<button on:click={saveData}>Save</button>

<hr />

<form on:submit|preventDefault>
  <input
    class={isFormValid ? '' : 'invalid'}
    type="email"
    name="email"
    id="email"
    bind:value={email}
  />

  <button type="submit" disabled={!isFormValid}>Submit</button>
</form>

<style>
  .invalid {
    border: 2px solid red;
  }
</style>
