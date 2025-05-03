package com.pkm.Pokemon;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PokemonRepository extends JpaRepository <Pokemon, String> {
	void deleteByName(String pokemonName);
	Optional<Pokemon> findByName(String name);
 
}
