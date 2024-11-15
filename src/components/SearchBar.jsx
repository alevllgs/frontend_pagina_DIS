import React, { useState } from "react";
import globalIndex from "../data/globalIndex"; // Índice global
import "../styles/Navbar.css"; // Estilos específicos del buscador

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchSubmitted, setIsSearchSubmitted] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsSearchSubmitted(true);
    if (searchValue.trim()) {
      const filteredResults = globalIndex.flatMap((section) =>
        section.content.filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (!value.trim()) {
      setIsSearchSubmitted(false);
      setSearchResults([]);
    }
  };

  return (
    <div>
      <form className="navbar-search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="¿Qué necesitas?"
          className="search-input"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">🔍</button>
      </form>
      {isSearchSubmitted && (
        <div className="search-results">
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((result, index) => (
                <li key={index}>
                  {result.link ? (
                    <a href={result.link}>{result.title}</a>
                  ) : (
                    <span>{result.title}</span>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-results">
              No se encontraron resultados para "{searchValue}".
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
