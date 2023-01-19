import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData, useParams } from "@remix-run/react";
import Pokemon from "~/components/pokemon";

export const loader = async ({ params }: { params: { name: string } }) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const pokemon = await response.json();
  return json(pokemon);
};
export default function PokemonPage() {
  const pokemon = useLoaderData<typeof loader>();
  return (
    <Pokemon name={pokemon.name} image={pokemon.sprites.other['official-artwork'].front_default} />
  );
}
export function ErrorBoundary() {
  const { name } = useParams();
  return (
    <div className="error-container">{`There was an error loading pokemon by the name ${name}. Sorry.`}</div>
  );
}
