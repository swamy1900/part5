import React from 'react'
const AddNewBlog = ({
  handleAddNewBlog,
  newBlogTitle,
  newBlogAuthor,
  newBlogUrl
  }) => (

  <form onSubmit={handleAddNewBlog}>
    <div>title:<input {...newBlogTitle.attributes} /></div>
    <div>author:<input {...newBlogAuthor.attributes} /></div>
    <div>url:<input {...newBlogUrl.attributes} /></div>
    <div><button type="submit">create</button></div>
  </form>
)

export default AddNewBlog