'use server'

export async function getPosts() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
  ]
}

export async function getComments() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    { id: 1, text: 'Great post!' },
    { id: 2, text: 'Thanks for sharing' },
  ]
}
