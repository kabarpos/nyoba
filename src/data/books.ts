import type { Book } from '../types'

export const books: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 150000,
    cover: "https://picsum.photos/200/300",
    description: "A story of decadence and excess."
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 180000,
    cover: "https://picsum.photos/200/300",
    description: "A classic of modern American literature."
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: 165000,
    cover: "https://picsum.photos/200/300",
    description: "A dystopian social science fiction novel."
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 145000,
    cover: "https://picsum.photos/200/300",
    description: "A romantic novel of manners."
  }
]