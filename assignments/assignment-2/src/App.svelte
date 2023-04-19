<script>
  let value = ""
  let error = ""
  let passwords = []

  $: isPassVisible = value.length > 4 && value.length < 11

  const handleValueChange = e => {
    value = e.target.value
    console.log(e.target.value)
    const valueLength = e.target.value.length

    if (valueLength > 0 && valueLength < 5) {
      error = "Too short"
    } else if (valueLength > 10) {
      error = "Too long"
    } else {
      error = ""
    }
  }

  const addPassToArray = () => {
    if (isPassVisible) {
      passwords = [
        ...passwords,
        { value, id: Math.floor(Math.random() * 1000) },
      ]
    }
  }

  const removePassFromArray = passId => {
    passwords = passwords.filter(p => p.id !== passId)
  }

  $: console.log("passwords >>>", passwords)
</script>

<h1>Assignment 2</h1>

<p>Solve these tasks.</p>

<ol>
  <li style="text-decoration: line-through">
    Add a password input field and save the user input in a variable.
  </li>

  <li style="text-decoration: line-through">
    Output "Too short" if the password is shorter than 5 characters and "Too
    long" if it's longer than 10.
  </li>

  <li style="text-decoration: line-through">
    Output the password in a paragraph tag if it's between these boundaries.
  </li>

  <li style="text-decoration: line-through">
    Add a button and let the user add the passwords to an array.
  </li>

  <li style="text-decoration: line-through">
    Output the array values (= passwords) in a unordered list (ul tag).
  </li>

  <li style="text-decoration: line-through">
    Bonus: If a password is clicked, remove it from the list.
  </li>
</ol>

<input
  id="password"
  type="password"
  name="password"
  placeholder="Password"
  {value}
  on:keyup={handleValueChange}
/>

{#if isPassVisible}
  <p>{value}</p>
{/if}

<small style="display: block; color: red">{error}</small>

<button on:click={addPassToArray}>Add Password</button>

<ul>
  {#each passwords as password (password.id)}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <li
      style="cursor: pointer"
      on:click={() => removePassFromArray(password.id)}
    >
      {password.id} : {password.value}
    </li>
  {/each}
</ul>
