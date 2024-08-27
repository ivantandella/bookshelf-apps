import React from "react";

export type BookType = {
  id: string;
  title: string;
  author: string;
  is_read: boolean;
  publish_at: string;
  genre: string;
};

export default function useBookshelf() {
  const [bookshelf, setBookshelf] = React.useState<BookType[]>([]);

  const onEditBookshelf = (bookshelf: BookType) => {
    console.log(bookshelf);
  };
  const onAddBookshelf = (bookshelf: BookType) => {
    setBookshelf((book) => [...book, bookshelf]);
  };
  const onDeleteBookshelf = (id: string) => {
    setBookshelf((bookshelf) => bookshelf.filter((book) => book.id !== id));
  };

  const onToggleBookshelf = (id: string) => {
    setBookshelf((bookshelf) =>
      bookshelf.map((book) => {
        if (book.id === id) {
          return { ...book, is_read: !book.is_read };
        }
        return book;
      })
    );
  };

  return {
    bookshelf,
    setBookshelf,
    onAddBookshelf,
    onDeleteBookshelf,
    onEditBookshelf,
    onToggleBookshelf,
  };
}
