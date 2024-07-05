"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { type Pokemon } from "@/types/pokemon";
import { Pixelify_Sans } from "next/font/google";
import Pagination from "./Pagination";

const pixelify = Pixelify_Sans({ subsets: ["latin"] });

const PokemonList: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/pokemons?page=${page}`);
        setPokemonData(response.data.data);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        setError("엔지엔지");
      }
    };

    fetchData();
  }, [page]);

  if (pokemonData.length === 0)
    return (
      <div className="flex items-center justify-center min-h-screen mb-100">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div>
      <ul className="grid grid-cols-6 gap-6 m-9">
        {pokemonData.map((pokemon) => (
          <li
            key={pokemon.id}
            className="flex w-40 h-50 justify-center items-center rounded-lg hover:bg-sky-500 p-2 bg-white"
          >
            <Link href={`/pokemons/${pokemon.id}`}>
              <div>
                <Image
                  src={pokemon.sprites.front_default}
                  width={100}
                  height={100}
                  alt={pokemon.name}
                />
              </div>
              <p className="block">{pokemon.korean_name}</p>
              <p className={pixelify.className}>도감번호: {pokemon.id}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  );
};

export default PokemonList;
