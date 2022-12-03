import React from 'react'

const BookCreate = () => {

    const submitHandler = () => {
        
    }

  return (
    <div onSubmit={submitHandler}>
        <form>
            <input type='text' placeholder='enter title'/>
            <input type='text' placeholder='enter author' />
            <input type='file' accept='image/*'/>
            <input type='submit' value='Submit' />
        </form>
    </div>
  )
}

export default BookCreate