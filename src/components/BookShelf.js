import React, { useState } from "react";
import BookItem from "./BookItem";

function BookShelf({ title, books, moveBook }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Função para alternar o estado expandido/colapsado
  const toggleShelf = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="book-shelf">
      {/* Título com botão de controle */}
      <div className="bookshelf-title">
        {title}
        <button className="bookshelf-toggle-btn" onClick={toggleShelf}>
          {isExpanded ? "Fechar" : "Abrir"}
        </button>
      </div>

      {/* Exibição condicional dos livros */}
      {isExpanded && (
        <div className="bookshelf-books">
          {books.map((book) => (
            <BookItem key={book.id} book={book} moveBook={moveBook} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BookShelf;
