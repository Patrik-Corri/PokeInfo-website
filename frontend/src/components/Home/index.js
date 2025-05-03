import { Link } from 'react-router-dom';
import './index.css';

const HomePage = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Welcome to
          <br />
          PokeInfo
        </h1>
        <h2>Find information about every Pokémon!</h2>
        <Link to="/search" className="flat-button">GET STARTED</Link>
      </div>
    </div>
  );
};

export default HomePage;
