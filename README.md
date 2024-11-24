
# 📚 Estante de Livros On-line

Uma aplicação React que permite organizar e gerenciar livros em diferentes categorias: **Estou lendo**, **Quero ler** e **Já lido**. O projeto inclui funcionalidades de busca, navegação intuitiva e uma interface esteticamente agradável.

## 🚀 Funcionalidades

- **Organização de Livros**: Categorize seus livros em diferentes estantes.
- **Busca Dinâmica**: Pesquise livros em tempo real utilizando uma API externa.
- **Interface Intuitiva**: Layout moderno e responsivo, com componentes reutilizáveis.
- **Gerenciamento de Livros**: Mova livros entre categorias de forma simples.
- **Feedbacks Visuais**: Mensagens de carregamento e tratamento de erros profissionais.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca para criação da interface de usuário.
- **React Router**: Navegação entre páginas.
- **CSS Puro**: Estilização personalizada e otimizada.
- **Fetch API**: Consumo de API externa para busca de livros.

## 📁 Estrutura de Pastas

```
estante-de-livros/
├── public/               # Arquivos estáticos
├── src/
│   ├── components/       # Componentes reutilizáveis (BookItem, BookShelf, Navbar)
│   ├── pages/            # Páginas principais (HomePage, SearchPage)
│   ├── services/         # Serviços para chamadas à API
│   ├── styles/           # Arquivos CSS organizados por funcionalidade
│   ├── App.js            # Componente raiz da aplicação
│   ├── index.js          # Ponto de entrada do React
│   └── ...               # Outros arquivos e configurações
└── package.json          # Dependências e scripts
```

## 📦 Instalação e Uso

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/SEU_USUARIO/estante-de-livros.git
   ```
2. **Navegue até a pasta do projeto**:
   ```bash
   cd estante-de-livros
   ```
3. **Instale as dependências**:
   ```bash
   npm install
   ```
4. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
   ```
5. Acesse o projeto no navegador:
   ```
   http://localhost:3000
   ```

## 🔍 Demonstração

### Página Principal
- Exibe as categorias de livros: **Estou lendo**, **Quero ler**, **Já lido**.
- Permite mover livros entre categorias.

### Página de Busca
- Busca dinâmica com base no título dos livros.
- Permite adicionar livros diretamente às categorias.

### Navbar
- Navegação fácil entre as páginas.

## 🔧 Configurações Adicionais

### Configuração da API
A aplicação utiliza uma API para buscar livros. O serviço está configurado em `src/services/BooksServices.js`. Certifique-se de que o token de autorização está correto:
```javascript
const headers = {
  Authorization: "Bearer SEU_TOKEN_AQUI",
  "Content-Type": "application/json",
};
```

### Estilização
Os estilos estão organizados em `src/styles/`. Cada componente possui estilos personalizados, garantindo modularidade e facilidade de manutenção.

## 🖼️ Capturas de Tela

### Página Principal
![Página Principal](docs/images/homepage.png)

### Página de Busca
![Página de Busca](docs/images/searchpage.png)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

1. Faça um _fork_ do repositório.
2. Crie um _branch_ para sua funcionalidade:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Faça _commit_ das suas alterações:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Envie para o repositório:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. Abra um _pull request_.

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

Feito por Maurício Antonio Theodoro Neto (https://github.com/mauricio-theodoro).
