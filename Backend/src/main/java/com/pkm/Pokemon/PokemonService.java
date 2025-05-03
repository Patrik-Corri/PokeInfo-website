package com.pkm.Pokemon;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Component;
 
@Component 
public class PokemonService { 
	
	private final PokemonRepository pokemonRepository;
	 
	public PokemonService(PokemonRepository nameRepository) {
		this.pokemonRepository = nameRepository;
	}  

	public List<Pokemon> getPokemon()
	{
		return pokemonRepository.findAll();
		
	}
	
	
	public List<Pokemon> getPokemonByName(String pokemonName) {
        return pokemonRepository.findAll().stream()
                .filter(pokemon -> pokemon.getName().toLowerCase().contains(pokemonName.toLowerCase()))
                .collect(Collectors.toList());
    } 
	
	public List<Pokemon> getGeneration(String pokemonGeneration) {
		try {
			Integer gen = Integer.parseInt(pokemonGeneration);
			return pokemonRepository.findAll().stream()
					.filter(pokemon -> gen.equals(pokemon.getGeneration()))
					.collect(Collectors.toList());
		} catch (NumberFormatException e) {
			return List.of(); 
		}
	}

	 
	
	public List<Pokemon> getColor(String pokemonColor) { 
		return pokemonRepository.findAll().stream() 
			.filter(pokemon -> pokemon.getColor() != null && pokemon.getColor().toLowerCase().contains(pokemonColor.toLowerCase()))
			.collect(Collectors.toList());
	}
	
	public List<Pokemon> getTyping(String pokemonType) {  
		return pokemonRepository.findAll().stream() 
			.filter(pokemon -> 
				(pokemon.getType1() != null && pokemon.getType1().toLowerCase().contains(pokemonType.toLowerCase())) ||
				(pokemon.getType2() != null && pokemon.getType2().toLowerCase().contains(pokemonType.toLowerCase()))
			)
			.collect(Collectors.toList());
	}
	
	
	
}   
