import './index.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { listPokemon } from "../../services/PokemonService";

export function PokemonData() {
  const location = useLocation();
  const initialData = location.state?.pokemon || [];
  const initialSearch = location.state?.name || '';
  const [allPokemon, setAllPokemon] = useState(initialData);
  const [displayedPokemon, setDisplayedPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [loading, setLoading] = useState(initialData.length === 0);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (initialData.length > 0) return;

    const fetchData = async () => {
      try {
        const res = await listPokemon();
        setAllPokemon(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load Pokémon data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [initialData.length]);


  useEffect(() => {
    if (!searchQuery.trim()) {
      setDisplayedPokemon(allPokemon);
      return;
    }
    const lowerQuery = searchQuery.toLowerCase();
    const filtered = allPokemon.filter(p =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.number.toString().includes(lowerQuery) ||
      p.type1.toLowerCase().includes(lowerQuery) ||
      (p.type2 && p.type2.toLowerCase().includes(lowerQuery)) ||
      p.color.toLowerCase().includes(lowerQuery)
    );
    setDisplayedPokemon(filtered);
  }, [searchQuery, allPokemon]);

  return (
    <div className="pokemon-page">
      <h1 className="page-title">Pokémon Database</h1>
      <div className="search-bar">
        <input
          name="pokemon-search"
          type="text"
          placeholder="Search for a Pokémon"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          autoFocus
        />
      </div>

      {error && <p className="error">{error}</p>}
      {loading ? (
        <p>Loading Pokémon...</p>
      ) : displayedPokemon.length === 0 ? (
        <p>No Pokémon match your search.</p>
      ) : (
        <div>
          <p className="results-count">{displayedPokemon.length} Pokémon found</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Type 1</th>
                <th>Type 2</th>
                <th>Color</th>
                <th>HP</th>
                <th>ATK</th>
                <th>DEF</th>
                <th>SP ATK</th>
                <th>SP DEF</th>
                <th>SPD</th>
                <th>Total</th>
                <th>Height (m)</th>
                <th>Weight (kg)</th>
                <th>Legendary</th>
              </tr>
            </thead>
            <tbody>
              {displayedPokemon.map(p => (
                <tr key={`${p.name}-${p.number}`}>
                  <td>{p.name}</td>
                  <td>#{p.number}</td>
                  <td>{p.type1}</td>
                  <td>{p.type2 || '-'}</td>
                  <td>{p.color}</td>
                  <td>{p.hp}</td>
                  <td>{p.atk}</td>
                  <td>{p.def}</td>
                  <td>{p.sp_atk}</td>
                  <td>{p.sp_def}</td>
                  <td>{p.spd}</td>
                  <td>{p.total}</td>
                  <td>{p.height}</td>
                  <td>{p.weight}</td>
                  <td>{p.legendary ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PokemonData;
