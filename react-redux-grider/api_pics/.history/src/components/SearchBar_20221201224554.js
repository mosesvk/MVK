import {useState} from 'react'

const SearchBar = ({onSubmit}) => {
  const [searchTerm, setSearchTerm] = useState(null)

  const handleClick = () => {
    onSubmit(searchTerm)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setSearchTerm(e)
  }

  return (
    <form onSubmit={handleClick}>
      <label>
        <input type='text' name='search' onChange={(e) => handleChange(e)} />
      </label>
      <input type='submit'/>
    </form>
  )
}

export default SearchBar