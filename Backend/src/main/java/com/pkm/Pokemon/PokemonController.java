package com.pkm.Pokemon;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController 
@RequestMapping(path = "api/v1/pokemon") 
public class PokemonController {
	private final PokemonService pokemonService;
	 
	 
	public PokemonController(PokemonService pokemonService)
	{
		this.pokemonService = pokemonService; 
	}  
	           
	@GetMapping
	public List<Pokemon> getPokemon(
			@RequestParam(required = false) String name,
			@RequestParam(required = false) String generation,
			@RequestParam(required = false) String type,
			@RequestParam(required = false) String color){
		if(name != null) {
			return pokemonService.getPokemonByName(name);
		}
		else if(generation != null) {
			return pokemonService.getGeneration(generation);
		}
		else if(type != null) {
			return pokemonService.getTyping(type);
		}
		else if(color != null) {
			return pokemonService.getColor(color);
		}
		else {
			return pokemonService.getPokemon();
		} 
	}
	
}
