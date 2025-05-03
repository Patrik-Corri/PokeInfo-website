import './index.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import generationsData from "../../data/generation.json";
import { getPokemonByGeneration } from "../../services/PokemonService";

const Generation = () => {
    const searchQuery = '';
    const [filteredGenerations, setFilteredGenerations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
   



    useEffect(() => {
        const filtered = generationsData.generations.filter(generation => 
            generation.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredGenerations(filtered);
    }, [searchQuery]);


    const handleGenerationClick = async (generation) => {
        try {
            setLoading(true);
            setError(null);
            const response = await getPokemonByGeneration(generation.search);
            navigate('/pokemon-list', { 
                state: { 
                    pokemon: response.data,
                    generation: generation.name 
                } 
            });
        } catch (err) {
            setError('Failed to load Pokemon data');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const renderGenerations = (generations) => {
        if (loading) {
            return (
                "Loading Pokemon..."
            );
        }

        if (error) {
            return (
                <div>
                    {error}
                </div>
            );
        }

        return ( 
            <div className="images-container">
                {generations.map((generation, index) => (
                    <div 
                        key={index} 
                        className="generation-box"
                        onClick={() => handleGenerationClick(generation)}
                    >
                        <img className="generation-image" src = {generation.cover} alt={generation.name}/>
                        <span className = "generation-name"> {generation.name} </span>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
            <div className="container generation-page">
                <h1 className="page-title">Choose a generation</h1>
                
                {renderGenerations(filteredGenerations)}
            </div>
        </>
    );
}

export default Generation;