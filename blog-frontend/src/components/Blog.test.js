import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

let blog, component, mockHandler
beforeEach(() => {
  blog = {
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 6666,
    id: '1',
    user: {
      username: 'root',
      name: 'superuser',
      id: '2'
    }
  }
  mockHandler = jest.fn()
  component = render(
    <Blog
      handleLikeBlog={mockHandler}
      handleRemoveBlog={mockHandler}
      blog={blog}
    />
  )
})

test('only name and author are shown by default', () => {

  const div = component.container.querySelector('.details')
  expect(div).toHaveStyle('display: none')

})

test('blog details are visible after click on blog', () => {
  const button = component.container.querySelector('.title')
  fireEvent.click(button)
  expect(component.container.querySelector('.details')).toBeVisible()

})