import React, { useState } from 'react'
const Blog = ({ handleLikeBlog, handleRemoveBlog, blog, currentUsername }) => {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => {
    setVisible(!visible)
  }
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  let visibility = { display: visible ? '' : 'none' }
  return (
    <div style={blogStyle}>
      <div onClick={() => toggleVisibility()} className="title">{blog.title} {blog.author}</div>

      <div style={visibility} className="details">
        <div>{blog.likes} likes <button onClick={() => handleLikeBlog(blog)}>like</button></div>
        <div>added by {blog.user.name}</div>
        {
          currentUsername === blog.user.username ?
            <button onClick={() => handleRemoveBlog(blog)}>remove</button>
            : null
        }
      </div>
    </div>
  )

}

export default Blog