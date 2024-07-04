import React from "react";
import PokemonDetail from "@/components/PokemonDetail";

const fetchPokemonData = async (id: string) => {
  const apiUrl = "http://localhost:3000";
  const response = await fetch(`${apiUrl}/api/pokemons/${id}`);
  return response.json();
};

const Detail = async ({ params }: { params: { id: string } }) => {
  const pokemon = await fetchPokemonData(params.id);

  return (
    <>
      <PokemonDetail pokemon={pokemon} />
    </>
  );
};

export default Detail;
