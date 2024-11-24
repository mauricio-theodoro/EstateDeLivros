// services/BooksServices.js

export const fetchBooks = async () => {
  const url =
    "https://api-books-dot-api-samples-423102.uc.r.appspot.com/api/books";
  const headers = {
    Authorization: "Bearer 12121059",
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }
    const data = await response.json();
    return data || []; // Supondo que a API retorne um objeto com um array "books"
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    return []; // Retorna um array vazio em caso de erro
  }
};
