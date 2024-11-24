import React, { useState, useEffect } from "react";
import { fetchBooks } from "../services/BooksServices";
import BookItem from "../components/BookItem";

function SearchPage({ shelves, moveBook }) {
  const [query, setQuery] = useState(""); // Termo de busca
  const [searchResults, setSearchResults] = useState([]); // Resultados da busca
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro

  // Função para realizar a busca na API diretamente
  const searchBooks = async () => {
    if (!query.trim()) {
      setSearchResults([]); // Limpa os resultados se não houver consulta
      return;
    }

    setLoading(true); // Inicia carregamento
    setError(null); // Limpa erros

    try {
      const books = await fetchBooks(); // Busca todos os livros da API
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredBooks); // Atualiza os resultados
    } catch (err) {
      console.error("Erro ao buscar livros:", err);
      setError("Erro ao realizar a busca. Tente novamente.");
    } finally {
      setLoading(false); // Finaliza carregamento
    }
  };

  // useEffect para disparar a busca ao alterar o termo
  useEffect(() => {
    const timer = setTimeout(() => {
      searchBooks(); // Chama a busca após um pequeno atraso (debounce)
    }, 300);
    return () => clearTimeout(timer); // Limpa o timeout anterior
  }, [query]);

  return (
    <div className="search-page">
      <h1>Buscar Livros</h1>

      {/* Barra de busca */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Digite o título do livro..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Atualiza o termo de busca
        />
      </div>

      {/* Feedback de carregamento */}
      {loading && <p>Carregando...</p>}

      {/* Exibição de erros */}
      {error && <p>{error}</p>}

      {/* Resultados da busca */}
      <div className="search-results">
        {searchResults.length > 0
          ? searchResults.map((book) => (
              <BookItem
                key={book.id}
                book={book}
                moveBook={moveBook} // Permite mover o livro para uma estante
              />
            ))
          : !loading && query && <p>Nenhum livro encontrado.</p>}
      </div>
    </div>
  );
}

export default SearchPage;
