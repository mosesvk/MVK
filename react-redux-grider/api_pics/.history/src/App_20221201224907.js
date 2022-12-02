import React from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImages from './api'

const app = () => {

  const handleSubmit = (term) => {
    searchImages(term)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  )
}

export default app