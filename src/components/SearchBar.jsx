import React from 'react'

const SearchBar = () => {
  // Search bar will contain a small form with text field + button
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    console.log(form.term.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='term'></input>
      <input type='submit' />
    </form>
  )
}

export default SearchBar
