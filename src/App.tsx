import React from "react";

import "./style.css";
import BookSearch from "./pages/booksSearchPage/BookSearch";
import SearchForm from "./components/searchForm/SearchForm";

function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1 className="header-caption">Search for books</h1>
        <SearchForm />
      </header>
      <BookSearch />
    </div>
  );
}

export default App;
