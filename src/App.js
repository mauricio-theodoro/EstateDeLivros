import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import Navbar from "./components/Navbar";
import "./styles/Global.css";

function App() {
  // Função para carregar as estantes do localStorage
  const loadShelvesFromLocalStorage = () => {
    const savedShelves = localStorage.getItem("shelves");
    return savedShelves
      ? JSON.parse(savedShelves) // Se existir no localStorage, carrega
      : {
          currentlyReading: [],
          wantToRead: [],
          read: [],
        }; // Caso contrário, retorna um estado inicial
  };

  // Estado inicial das estantes
  const [shelves, setShelves] = useState(loadShelvesFromLocalStorage);

  // Função para mover um livro entre as estantes
  const moveBook = (book, newShelf) => {
    setShelves((prevShelves) => {
      // Remove o livro de todas as estantes
      const updatedShelves = {
        currentlyReading: prevShelves.currentlyReading.filter(
          (b) => b.id !== book.id
        ),
        wantToRead: prevShelves.wantToRead.filter((b) => b.id !== book.id),
        read: prevShelves.read.filter((b) => b.id !== book.id),
      };

      // Adiciona o livro à nova estante se a nova estante for diferente de "none"
      if (newShelf !== "none") {
        updatedShelves[newShelf] = [
          ...updatedShelves[newShelf],
          { ...book, shelf: newShelf },
        ];
      }

      // Salva as estantes no localStorage após a alteração
      localStorage.setItem("shelves", JSON.stringify(updatedShelves));

      return updatedShelves; // Retorna o novo estado atualizado das estantes
    });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage shelves={shelves} moveBook={moveBook} />}
        />
        <Route
          path="/search"
          element={<SearchPage shelves={shelves} moveBook={moveBook} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
