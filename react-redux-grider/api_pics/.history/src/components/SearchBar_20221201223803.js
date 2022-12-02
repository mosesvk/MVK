import React from 'react'

const SearchBar = ({onSubmit}) => {
  return (
    <form>
      <label>
        <input type='text' name='search' />
      </label>
      <input type='submit'/>
    </form>
  )
}

export default SearchBar