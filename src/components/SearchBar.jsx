import React from 'react'
import styled from 'styled-components'

const StyledSearchBar = styled.form`
  height: 56px;
  background: transparent;
  display: flex;
  flex-direction: row;
  gap: 16px;

  > input {
    height: 100%;
    padding: 0 16px;

    &[type=text] {
      flex-grow: 1;
      background-color: ${({theme}) => theme.colors.cloud};
    }

    &[type=submit] {
      background-color: ${({theme}) => theme.colors.cloudDark};
      text-transform: uppercase;
    }
  }
`

const SearchBar = () => {
  // Search bar will contain a small form with text field + button
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    console.log(form.term.value)
  }

  return (
    <StyledSearchBar onSubmit={handleSubmit}>
      <input type='text' name='term'></input>
      <input type='submit' value='Search photos' />
    </StyledSearchBar>
  )
}

export default SearchBar
