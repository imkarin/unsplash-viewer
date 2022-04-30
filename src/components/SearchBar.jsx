import React from 'react'
import styled from 'styled-components'

const StyledSearchBar = styled.form`
  height: 48px;
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
      overflow: hidden;
    }

    &[type=submit] {
      background-color: ${({theme}) => theme.colors.cloud};
      text-transform: uppercase;
    }
  }
`

const SearchBar = (props) => {
  // Search bar will contain a small form with text field + button
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const searchTerm = form.term.value
    props.handleSearch(searchTerm)
  }

  return (
    <StyledSearchBar onSubmit={handleSubmit}>
      <input type='text' name='term' placeholder='Search free high-resolution photos'></input>
      <input type='submit' value='Search photos' />
    </StyledSearchBar>
  )
}

export default SearchBar
