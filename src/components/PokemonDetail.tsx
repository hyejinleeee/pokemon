import React from "react";
import Image from "next/image";
import Link from "next/link";
import { type Pokemon } from "@/types/pokemon";
import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({ subsets: ["latin"] });

type PokemonDetailProps = {
  pokemon: Pokemon;
};

const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon }) => {
  if (!pokemon) return null;

  const types = pokemon.types.map((type) => type.type.korean_name).join(", ");

  const abilities = pokemon.abilities
    .map((ability) => ability.ability.korean_name)
    .join(", ");

  const moves = pokemon.moves
    .slice(0, 10)
    .map((move) => move.move.korean_name)
    .join(", ");

  return (
    <div className="flex flex-col border-stone-500 border-2 rounded-lg justify-center items-center  w-96 m-auto mb-20 p-8">
      <div className="p-7">
        <p className={`text-xl font-semibold ${pixelify.className}`}>
          No. {pokemon.id} - {pokemon.korean_name}
        </p>
      </div>
      <div className="">
        <Image
          src={pokemon.sprites.front_default}
          width={200}
          height={200}
          alt={pokemon.name}
        />
      </div>

      <p>키: {pokemon.height}cm</p>
      <p>몸무게: {pokemon.weight}kg</p>
      <p>타입: {types}</p>
      <p>능력: {abilities}</p>
      <p>기술: {moves}</p>

      <Link href="/">
        <button className="bg-slate-300">뒤로가기</button>
      </Link>
    </div>
  );
};

export default PokemonDetail;
