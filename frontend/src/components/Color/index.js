import './index.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import colorData from "../../data/color.json";
import { getPokemonByColor } from "../../services/PokemonService";

const Color = () => {
    const searchQuery = '';
    const [filteredColors, setFilteredColors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const filtered = colorData.colors.filter(color => 
            color.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredColors(filtered);
    }, [searchQuery]);


    const handleColorClick = async (color) => {
        try {
            setLoading(true);
            setError(null);
            const response = await getPokemonByColor(color.search);
            navigate('/pokemon-list', {
                state: {
                    pokemon: response.data,
                    color: color.name
                }
            });
        } catch (err) {
            setError('Failed to load Pokemon data');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const renderColors = (colors) => {
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
                {colors.map((color, index) => (
                    <div 
                        key={index}
                        className={`color-box ${color.name}`}
                        onClick={() => handleColorClick(color)}
                    >
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
            <div className="container color-page">
                <h1 className="page-title">Choose a color</h1>
                {renderColors(filteredColors)}
            </div>
        </>
    );
}

export default Color;