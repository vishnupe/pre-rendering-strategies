import Image from "next/image";

async function fetchPokemon(name: string) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await response.json();
    return pokemon;
}
export default async function Pokemon({ params }: { params: { name: string } }) {
  const pokemon: any = await fetchPokemon(params.name);
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <Image src={pokemon.sprites.other['official-artwork'].front_default}  alt={pokemon.name} width={475} height={475}/>
    </div>
  );
}
