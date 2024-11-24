import React from "react";
import BookShelf from "../components/BookShelf";
import "../styles/Global.css";

function HomePage({ shelves, moveBook }) {
  return (
    <div className="p1">
      <h1>Página Principal</h1>
      {/* Renderiza cada estante com seus livros */}
      <BookShelf
        title="Estou lendo"
        books={shelves.currentlyReading}
        moveBook={moveBook}
      />
      <BookShelf
        title="Quero ler"
        books={shelves.wantToRead}
        moveBook={moveBook}
      />
      <BookShelf title="Já lido" books={shelves.read} moveBook={moveBook} />
    </div>
  );
}

export default HomePage;
