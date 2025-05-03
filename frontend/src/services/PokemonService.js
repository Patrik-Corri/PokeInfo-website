import axios from 'axios';

const API_URL = "https://pokeinfo-website-1.onrender.com/api/v1/pokemon" ;

export const listPokemon = () => {
  return axios.get(API_URL);
};

export const getPokemonByName = (name) => {
  return axios.get(`${API_URL}?name=${encodeURIComponent(name)}`);
};

export const getPokemonByType = (type) => {
  return axios.get(`${API_URL}?type=${encodeURIComponent(type)}`);
};

export const getPokemonByGeneration = (generation) => {
  return axios.get(`${API_URL}?generation=${generation}`);
};

export const getPokemonByColor = (color) => {
  return axios.get(`${API_URL}?color=${encodeURIComponent(color)}`);
};