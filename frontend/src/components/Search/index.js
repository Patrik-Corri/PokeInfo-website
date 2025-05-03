import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { getPokemonByName } from "../../services/PokemonService";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const { data } = await getPokemonByName(searchQuery.toLowerCase());
      const results = Array.isArray(data) ? data : [data];

      if (!results.length) {
        setError("Pokémon not found.");
        return;
      }

      navigate('/pokemon-list', {
        state: { pokemon: results, name: searchQuery }
      });
    } catch (err) {
      console.error(err);
      setError("An error occurred while searching.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container pokemon-page">
      <h1 className="page-title">Search for Pokémon</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a Pokémon"
          value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value);
            if (error) setError(null);
          }}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Go'}
        </button>
      </div>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Search;
