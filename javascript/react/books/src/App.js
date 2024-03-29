import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, { id: Math.round(Math.random() * 9999), title }]);
  }

  const deleteBookById = (id) => {
    setBooks(books.filter(book => {
      return book.id !== id;
    }));
  }

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id == id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;