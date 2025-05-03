import './index.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import typeData from "../../data/types.json";
import { getPokemonByType } from "../../services/PokemonService";

const Type = () => {
    const searchQuery = '';
    const [filteredTypes, setFilteredTypes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const filtered = typeData.types.filter(type => 
            type.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredTypes(filtered);
    }, [searchQuery]);


    const handleTypesClick = async (type) => {
        try {
            setLoading(true);
            setError(null);
            const response = await getPokemonByType(type.search);
            navigate('/pokemon-list', { 
                state: { 
                    pokemon: response.data,
                    type: type.name 
                } 
            });
        } catch (err) {
            setError('Failed to load Pokemon data');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const renderTypes = (types) => {
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
                {types.map((type, index) => ( 
                    <div 
                        key={index} 
                        className="type-box"
                        onClick={() => handleTypesClick(type)}
                    >
                        <img src = {type.cover} alt={type.name} className="type-image" />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
            <div className="container type-page">
                <h1 className="page-title">Choose a type</h1>
                {renderTypes(filteredTypes)}
            </div>
        </>
    );
}

export default Type;
