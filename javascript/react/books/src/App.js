import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, { id: books.length + 1, title: title }]);
  }

  return (
    <div>
      Number of Books: {books.length}
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;