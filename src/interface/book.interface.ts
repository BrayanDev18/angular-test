export interface BookProps {
  title: string,
  author: string,
  genre: string
  yearOfPublication: string
}

export interface BookResponseProps {
  success: boolean,
  message: string
  books: BookProps[]
}

