import React, { useState } from "react";
import "../styles/Global.css";

function BookItem({ book, moveBook }) {
  const [showDescription, setShowDescription] = useState(false); // Estado para controlar o balão

  const handleShelfChange = (event) => {
    moveBook(book, event.target.value);
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription); // Alterna o estado do balão
  };

  return (
    <div className="book-item">
      <img
        src={
          (book.imageLinks && book.imageLinks.thumbnail) || "placeholder.jpg"
        }
        alt={book.title || "Título desconhecido"}
      />
      <div>
        <h3>{book.title || "Título desconhecido"}</h3>
        <p>
          {(book.authors && book.authors.join(", ")) || "Autor desconhecido"}
        </p>

        {/* Botão para abrir o balão */}
        <button onClick={toggleDescription}>Ver descrição</button>

        {/* Balão de descrição */}
        {showDescription && (
          <div className="description-balloon">
            <p>{book.description || "Sem descrição disponível."}</p>
            <button onClick={toggleDescription}>Fechar</button>
          </div>
        )}

        <select value={book.shelf || "none"} onChange={handleShelfChange}>
          <option value="none">Mover para...</option>
          <option value="currentlyReading">Estou lendo</option>
          <option value="wantToRead">Quero ler</option>
          <option value="read">Já lido</option>
        </select>
      </div>
    </div>
  );
}

export default BookItem;
